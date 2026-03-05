const admin = require('firebase-admin');
const BlogPost = require('../model/BlogPost');

/**
 * BlogService
 * Handles CRUD operations for blog posts.
 */
class BlogService {
    constructor() {
        this.db = admin.firestore();
        this.collection = this.db.collection('website_content');
        this.subCollectionName = 'blog';
    }

    /**
     * Create blog post
     * @param {string} parentDocId
     * @param {object} data
     * @returns {Promise<object>}
     */
    async createBlogPost(parentDocId, data) {
        const post = new BlogPost(data);
        let docId = post.id;

        if (!docId) {
            const slug = post.metaTitle ?
                post.metaTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') :
                `post-${Date.now()}`;
            docId = slug;
        }

        const docRef = this.collection.doc(parentDocId).collection(this.subCollectionName).doc(docId);

        const dataToSave = {
            ...post.toJSON(),
            id: docId,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        };

        await docRef.set(dataToSave);
        return { success: true, data: { ...dataToSave, id: docId } };
    }

    /**
     * Get blog post by ID
     * @param {string} parentDocId
     * @param {string} postId
     * @returns {Promise<object>}
     */
    async getBlogPost(parentDocId, postId) {
        const doc = await this.collection.doc(parentDocId).collection(this.subCollectionName).doc(postId).get();
        if (!doc.exists) {
            return { success: false, error: 'Blog post not found' };
        }
        return { success: true, data: doc.data() };
    }

    /**
     * Get all blog posts with pagination (simplified for Node)
     * @param {string} parentDocId
     * @param {number} page
     * @param {number} pageSize
     * @returns {Promise<object>}
     */
    async getBlogPosts(parentDocId, page = 1, pageSize = 10) {
        const subColRef = this.collection.doc(parentDocId).collection(this.subCollectionName);
        const snapshot = await subColRef.orderBy('date', 'desc').get();

        const total = snapshot.size;
        const start = (page - 1) * pageSize;
        const end = start + pageSize;

        const posts = snapshot.docs.slice(start, end).map(doc => doc.data());

        return {
            success: true,
            data: posts,
            total,
            page,
            limit: pageSize,
            totalPages: Math.ceil(total / pageSize)
        };
    }

    /**
     * Update blog post
     * @param {string} parentDocId
     * @param {string} postId
     * @param {object} updates
     * @returns {Promise<object>}
     */
    async updateBlogPost(parentDocId, postId, updates) {
        const docRef = this.collection.doc(parentDocId).collection(this.subCollectionName).doc(postId);
        await docRef.update({
            ...updates,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
        return this.getBlogPost(parentDocId, postId);
    }

    /**
     * Delete blog post
     * @param {string} parentDocId
     * @param {string} postId
     * @returns {Promise<object>}
     */
    async deleteBlogPost(parentDocId, postId) {
        await this.collection.doc(parentDocId).collection(this.subCollectionName).doc(postId).delete();
        return { success: true, message: 'Blog post deleted successfully' };
    }
}

module.exports = BlogService;
