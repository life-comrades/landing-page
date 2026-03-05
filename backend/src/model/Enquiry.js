/**
 * Enquiry Model
 * Represents a contact/enquiry form submission from the Contact page or Blog sidebar.
 *
 * Structure:
 * {
 *   fullName: string,
 *   mobile: string,
 *   email: string,
 *   message: string,
 *   source: 'contact' | 'blog_sidebar',
 *   createdAt: Timestamp
 * }
 */
class Enquiry {
    constructor(data = {}) {
        this.fullName = data.fullName || '';
        this.mobile = data.mobile || '';
        this.email = data.email || '';
        this.message = data.message || '';
        this.source = data.source || 'contact';
        this.createdAt = data.createdAt || null;
    }

    /**
     * Creates an Enquiry instance from a Firestore document snapshot.
     * @param {FirebaseFirestore.DocumentSnapshot} doc
     * @returns {Enquiry}
     */
    static fromFirestore(doc) {
        return new Enquiry({ id: doc.id, ...doc.data() });
    }

    /**
     * Converts to a plain object for JSON serialization / Firestore writes.
     * @returns {object}
     */
    toJSON() {
        return {
            fullName: this.fullName,
            mobile: this.mobile,
            email: this.email,
            message: this.message,
            source: this.source,
            createdAt: this.createdAt,
        };
    }
}

module.exports = Enquiry;
