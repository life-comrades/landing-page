const admin = require('firebase-admin');
const Job = require('../model/Job');

/**
 * JobService
 * Handles CRUD operations for job postings.
 */
class JobService {
    constructor() {
        this.db = admin.firestore();
        this.collection = this.db.collection('jobs');
    }

    /**
     * Create job
     * @param {object} data
     * @returns {Promise<object>}
     */
    async createJob(data) {
        const job = new Job(data);
        const slug = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const docId = job.id || slug;
        const docRef = this.collection.doc(docId);

        await docRef.set({
            ...job.toJSON(),
            id: docId,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
        return { success: true, data: { ...job.toJSON(), id: docId } };
    }

    /**
     * Get job by ID
     * @param {string} jobId
     * @returns {Promise<object>}
     */
    async getJob(jobId) {
        const doc = await this.collection.doc(jobId).get();
        if (!doc.exists) {
            return { success: false, error: 'Job not found' };
        }
        return { success: true, data: { id: doc.id, ...doc.data() } };
    }

    /**
     * Get all jobs with filtering
     * @param {object} filters
     * @returns {Promise<object>}
     */
    async getJobs(filters = {}) {
        let query = this.collection;

        if (filters.category) {
            query = query.where('category', '==', filters.category);
        }
        if (filters.type) {
            query = query.where('type', '==', filters.type);
        }

        const snapshot = await query.get();
        const jobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return { success: true, data: jobs };
    }

    /**
     * Update job
     * @param {string} jobId
     * @param {object} updates
     * @returns {Promise<object>}
     */
    async updateJob(jobId, updates) {
        const docRef = this.collection.doc(jobId);
        await docRef.update({
            ...updates,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
        return this.getJob(jobId);
    }

    /**
     * Delete job
     * @param {string} jobId
     * @returns {Promise<object>}
     */
    async deleteJob(jobId) {
        await this.collection.doc(jobId).delete();
        return { success: true, message: 'Job deleted successfully' };
    }
}

module.exports = JobService;
