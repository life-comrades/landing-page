const admin = require('firebase-admin');
const WebContent = require('../model/WebContent');

/**
 * WebContentService
 * Handles CRUD operations for global website content.
 */
class WebContentService {
    constructor() {
        this.db = admin.firestore();
        this.collection = this.db.collection('webContent');
    }

    /**
     * Create or update main web content
     * @param {object} data - WebContent data
     * @param {string} docId - Document ID (default 'main')
     * @returns {Promise<object>}
     */
    async upsertWebContent(data, docId = 'main') {
        const webContent = new WebContent(data);
        const docRef = this.collection.doc(docId);

        const dataToSave = {
            ...webContent.toJSON(),
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        };

        if (!dataToSave.createdAt) {
            dataToSave.createdAt = admin.firestore.FieldValue.serverTimestamp();
        }

        await docRef.set(dataToSave, { merge: true });
        return { success: true, data: { ...webContent.toJSON(), id: docId } };
    }

    /**
     * Get web content
     * @param {string} docId - Document ID (default 'main')
     * @returns {Promise<object>}
     */
    async getWebContent(docId = 'main') {
        const doc = await this.collection.doc(docId).get();
        if (!doc.exists) {
            return { success: false, error: 'Web content not found' };
        }

        const data = doc.data();
        // Convert Timestamps to ISO strings for API consistency if needed, 
        // but existing models handle plain objects.
        return { success: true, data: { id: doc.id, ...data } };
    }

    /**
     * Update partial web content
     * @param {object} updates - Partial updates
     * @param {string} docId - Document ID (default 'main')
     * @returns {Promise<object>}
     */
    async updateWebContent(updates, docId = 'main') {
        const docRef = this.collection.doc(docId);
        await docRef.update({
            ...updates,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
        return this.getWebContent(docId);
    }

    /**
     * Delete web content
     * @param {string} docId - Document ID
     * @returns {Promise<object>}
     */
    async deleteWebContent(docId = 'main') {
        await this.collection.doc(docId).delete();
        return { success: true, message: 'Web content deleted successfully' };
    }
}

module.exports = WebContentService;
