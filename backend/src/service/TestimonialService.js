const admin = require('firebase-admin');
const Testimonial = require('../model/Testimonial');

/**
 * TestimonialService
 * Handles CRUD operations for testimonials.
 */
class TestimonialService {
    constructor() {
        this.db = admin.firestore();
        this.collection = this.db.collection('testimonials');
    }

    /**
     * Create testimonial
     * @param {object} data
     * @returns {Promise<object>}
     */
    async createTestimonial(data) {
        const testimonial = new Testimonial(data);
        const docRef = await this.collection.add({
            ...testimonial.toJSON(),
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
        return { success: true, data: { ...testimonial.toJSON(), id: docRef.id } };
    }

    /**
     * Get all testimonials
     * @param {object} filters
     * @returns {Promise<object>}
     */
    async getTestimonials(filters = {}) {
        let query = this.collection.orderBy('createdAt', 'desc');

        if (filters.featured !== undefined) {
            query = query.where('featured', '==', filters.featured);
        }
        if (filters.serviceId) {
            query = query.where('serviceId', '==', filters.serviceId);
        }

        const snapshot = await query.get();
        const testimonials = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return { success: true, data: testimonials };
    }

    /**
     * Update testimonial
     * @param {string} id
     * @param {object} updates
     * @returns {Promise<object>}
     */
    async updateTestimonial(id, updates) {
        const docRef = this.collection.doc(id);
        await docRef.update(updates);
        return { success: true, message: 'Testimonial updated successfully' };
    }

    /**
     * Delete testimonial
     * @param {string} id
     * @returns {Promise<object>}
     */
    async deleteTestimonial(id) {
        await this.collection.doc(id).delete();
        return { success: true, message: 'Testimonial deleted successfully' };
    }
}

module.exports = TestimonialService;
