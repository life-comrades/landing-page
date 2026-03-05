const admin = require('firebase-admin');

/**
 * ApplicationService
 * Currently uses Firestore as a temporary store for Job Applications,
 * or fetches them from GSheet.
 * The user said "job application to staff db STAFF_DATABASE".
 * So, we move them to Neon when accepted.
 */
class ApplicationService {
    constructor() {
        this.db = admin.firestore();
        this.collection = this.db.collection('job_applications');
    }

    /**
     * Get all applications (Temporary Firestore Inbox)
     */
    async getAllApplications() {
        try {
            const snapshot = await this.collection.orderBy('createdAt', 'desc').get();
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error getting applications from Firestore:', error);
            throw error;
        }
    }

    /**
     * Update status or delete after promoting to Neon
     */
    async deleteApplication(id) {
        try {
            await this.collection.doc(id).delete();
            return { success: true };
        } catch (error) {
            console.error('Error deleting application:', error);
            throw error;
        }
    }
}

module.exports = ApplicationService;
