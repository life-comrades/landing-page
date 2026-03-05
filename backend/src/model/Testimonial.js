/**
 * Testimonial Model
 * Entity for managing user testimonials.
 */
class Testimonial {
    constructor(data = {}) {
        this.id = data.id || null;
        this.quote = data.quote || '';
        this.author = data.author || '';
        this.serviceId = data.serviceId || '';
        this.createdAt = data.createdAt || null;
        this.featured = data.featured || false;
    }

    static fromFirestore(doc) {
        return new Testimonial({ id: doc.id, ...doc.data() });
    }

    toJSON() {
        return {
            id: this.id,
            quote: this.quote,
            author: this.author,
            serviceId: this.serviceId,
            createdAt: this.createdAt,
            featured: this.featured
        };
    }
}

module.exports = Testimonial;
