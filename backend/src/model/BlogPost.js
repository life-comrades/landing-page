/**
 * BlogPost Model
 * Entity for managing blog content.
 */
class BlogPost {
    constructor(data = {}) {
        this.id = data.id || null;
        this.category = data.category || '';
        this.metaTitle = data.metaTitle || '';
        this.metaDescription = data.metaDescription || '';
        this.metaKeywords = data.metaKeywords || [];
        this.image = {
            src: data.image?.src || '',
            alt: data.image?.alt || '',
            description: data.image?.description || ''
        };
        this.readTime = data.readTime || 0;
        this.author = data.author || '';
        this.date = data.date || null;
        this.content = data.content || []; // Array of BlogContentSection
        this.createdAt = data.createdAt || null;
        this.updatedAt = data.updatedAt || null;
        this.published = data.published || false;
        this.isFeatured = data.isFeatured || false;
    }

    static fromFirestore(doc) {
        return new BlogPost({ id: doc.id, ...doc.data() });
    }

    toJSON() {
        return {
            id: this.id,
            category: this.category,
            metaTitle: this.metaTitle,
            metaDescription: this.metaDescription,
            metaKeywords: this.metaKeywords,
            image: this.image,
            readTime: this.readTime,
            author: this.author,
            date: this.date,
            content: this.content,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            published: this.published,
            isFeatured: this.isFeatured
        };
    }
}

module.exports = BlogPost;
