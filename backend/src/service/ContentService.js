const admin = require('firebase-admin');
const CareService = require('./CareService');
const JobService = require('./JobService');
const BlogService = require('./BlogService');
const TestimonialService = require('./TestimonialService');

/**
 * ContentService
 * Provides website content and SEO page metadata.
 * Aggregates data for ISR.
 */
class ContentService {
    constructor() {
        this.db = admin.firestore();
        this.websiteContentCol = this.db.collection('website_content');
        this.metadataCol = this.db.collection('metadata');

        // Initialize other services
        this.careService = new CareService();
        this.jobService = new JobService();
        this.blogService = new BlogService();
        this.testimonialService = new TestimonialService();
    }

    /**
     * Aggregates all data for Next.js ISR
     * @returns {Promise<object>}
     */
    async getISRData() {
        try {
            const [
                globalContent,
                allMetadata,
                services,
                jobs,
                testimonials,
                blogPosts
            ] = await Promise.all([
                this.getGlobalContent(),
                this.getAllPageMetadata(),
                this.careService.getAllServices(),
                this.jobService.getJobs(),
                this.testimonialService.getTestimonials(),
                this.blogService.getBlogPosts('global') // Assuming global or 'test-main' for now
            ]);

            return {
                content: globalContent,
                metadata: allMetadata,
                services: services,
                jobs: jobs.success ? jobs.data : [],
                testimonials: testimonials.success ? testimonials.data : [],
                blogPosts: blogPosts.success ? blogPosts.data : []
            };
        } catch (error) {
            console.error('Error fetching ISR data:', error);
            throw error;
        }
    }

    async getGlobalContent() {
        const doc = await this.websiteContentCol.doc('global').get();
        if (!doc.exists) return {};
        return doc.data();
    }

    async updateGlobalContent(updates) {
        await this.websiteContentCol.doc('global').set(updates, { merge: true });

        // Sync with Google Sheets for emails (silent fail if FormService error)
        try {
            const FormService = require('./FormService');
            const formService = new FormService();
            await formService.updateConfig(updates);
        } catch (error) {
            console.error('Error syncing global content to GSheets:', error);
        }

        return this.getGlobalContent();
    }

    async getAllPageMetadata() {
        const snapshot = await this.metadataCol.get();
        const metadata = {};
        snapshot.docs.forEach(doc => {
            metadata[doc.id] = doc.data();
        });
        return metadata;
    }

    async getPageMetadata(pageId) {
        const doc = await this.metadataCol.doc(pageId).get();
        if (!doc.exists) return null;
        return doc.data();
    }

    async upsertPageMetadata(pageId, data) {
        await this.metadataCol.doc(pageId).set(data, { merge: true });
        return this.getPageMetadata(pageId);
    }
}

module.exports = ContentService;
