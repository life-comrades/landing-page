/**
 * Service Model
 * Entity for managing services offered.
 */
class Service {
    constructor(data = {}) {
        this.id = data.id || null;
        this.title = data.title || '';
        this.description = data.description || '';
        this.about = data.about || '';
        this.aboutDetails = data.aboutDetails || '';
        this.whoItIsFor = data.whoItIsFor || [];
        this.features = data.features || [];
        this.faq = data.faq || { question: '', answer: '' };
        this.testimonial = data.testimonial || { quote: '', author: '' };
        this.metadata = {
            title: data.metadata?.title || '',
            description: data.metadata?.description || '',
            keywords: data.metadata?.keywords || []
        };
        this.image = data.image || '';
        this.createdAt = data.createdAt || null;
        this.updatedAt = data.updatedAt || null;
    }

    static fromFirestore(doc) {
        return new Service({ id: doc.id, ...doc.data() });
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            about: this.about,
            aboutDetails: this.aboutDetails,
            whoItIsFor: this.whoItIsFor,
            features: this.features,
            faq: this.faq,
            testimonial: this.testimonial,
            metadata: this.metadata,
            image: this.image,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

module.exports = Service;
