const admin = require('firebase-admin');
const Service = require('../model/Service');

/**
 * CareService
 * Handles CRUD operations for healthcare services.
 */
class CareService {
    constructor() {
        this.db = admin.firestore();
        this.collection = this.db.collection('services');
    }

    /**
     * Create service
     * @param {string} id - Service ID
     * @param {object} data - Service data
     * @returns {Promise<object>}
     */
    async createService(id, data) {
        const service = new Service({ ...data, id });
        const docRef = this.collection.doc(id);

        const dataToSave = {
            ...service.toJSON(),
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        };

        await docRef.set(dataToSave);
        return { success: true, data: { ...dataToSave, id } };
    }

    /**
     * Get service by ID
     * @param {string} id
     * @returns {Promise<object>}
     */
    async getServiceById(id) {
        const doc = await this.collection.doc(id).get();
        if (!doc.exists) {
            throw new Error(`Service '${id}' not found`);
        }
        return Service.fromFirestore(doc);
    }

    /**
     * Get all services
     * @returns {Promise<Array>}
     */
    async getAllServices() {
        try {
            const snapshot = await this.collection.get();
            return snapshot.docs.map(doc => Service.fromFirestore(doc));
        } catch (error) {
            console.error('[CareService] Error fetching all services:', error);
            throw error;
        }
    }

    /**
     * Update service
     * @param {string} id
     * @param {object} updates
     * @returns {Promise<object>}
     */
    async updateService(id, updates) {
        try {
            const docRef = this.collection.doc(id);
            const doc = await docRef.get();
            if (!doc.exists) {
                throw new Error(`Service '${id}' not found`);
            }

            await docRef.update({
                ...updates,
                updatedAt: admin.firestore.FieldValue.serverTimestamp()
            });

            return this.getServiceById(id);
        } catch (error) {
            console.error(`[CareService] Error updating service ${id}:`, error);
            throw error;
        }
    }

    /**
     * Delete service
     * @param {string} id
     * @returns {Promise<void>}
     */
    async deleteService(id) {
        try {
            const doc = await this.collection.doc(id).get();
            if (!doc.exists) {
                throw new Error(`Service '${id}' not found`);
            }
            await this.collection.doc(id).delete();
        } catch (error) {
            console.error(`[CareService] Error deleting service ${id}:`, error);
            throw error;
        }
    }
}

module.exports = CareService;
