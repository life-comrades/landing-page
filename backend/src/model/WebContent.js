/**
 * WebContent Model
 * Main entity for managing company information, contact details, and about section.
 */
class WebContent {
    constructor(data = {}) {
        this.id = data.id || null;
        this.companyName = data.companyName || '';
        this.tagline = data.tagline || '';
        this.contact = {
            phone: data.contact?.phone || '',
            email: data.contact?.email || '',
            address: data.contact?.address || '',
            cities: data.contact?.cities || [],
            social: data.contact?.social || []
        };
        this.metadata = {
            id: data.metadata?.id || '',
            title: data.metadata?.title || '',
            description: data.metadata?.description || '',
            keywords: data.metadata?.keywords || []
        };
        this.testimonials = data.testimonials || [];
        this.jobs = data.jobs || [];
        this.about = {
            mission: data.about?.mission || '',
            vision: data.about?.vision || '',
            founders: data.about?.founders || [],
            partners: data.about?.partners || [],
            events: data.about?.events || []
        };
        this.services = data.services || [];
        this.blog = data.blog || [];
        this.createdAt = data.createdAt || null;
        this.updatedAt = data.updatedAt || null;
    }

    /**
     * Creates a WebContent instance from a Firestore document snapshot.
     * @param {FirebaseFirestore.DocumentSnapshot} doc
     * @returns {WebContent}
     */
    static fromFirestore(doc) {
        return new WebContent({ id: doc.id, ...doc.data() });
    }

    /**
     * Converts to a plain object for JSON serialization / Firestore writes.
     * @returns {object}
     */
    toJSON() {
        return {
            companyName: this.companyName,
            tagline: this.tagline,
            contact: this.contact,
            metadata: this.metadata,
            testimonials: this.testimonials,
            jobs: this.jobs,
            about: this.about,
            services: this.services,
            blog: this.blog,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

module.exports = WebContent;
