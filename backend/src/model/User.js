/**
 * User Model
 * Represents a user profile synced with Firebase Authentication.
 *
 * Structure:
 * {
 *   uid: string,               — Firebase Auth UID
 *   email: string,
 *   displayName: string,
 *   photoURL?: string,
 *   phone?: string,
 *   role: 'user' | 'admin' | 'nurse' | 'doctor',
 *   isActive: boolean,
 *   address?: string,
 *   city?: string,
 *   createdAt: Timestamp,
 *   updatedAt: Timestamp
 * }
 */
class User {
    constructor(data = {}) {
        this.uid = data.uid || '';
        this.email = data.email || '';
        this.displayName = data.displayName || '';
        this.phone = data.phone || null;
        this.role = data.role || 'user';
        this.isActive = data.isActive !== undefined ? data.isActive : true;
        this.createdAt = data.createdAt || null;
        this.updatedAt = data.updatedAt || null;
    }

    /**
     * Creates a User instance from a Firestore document snapshot.
     * @param {FirebaseFirestore.DocumentSnapshot} doc
     * @returns {User}
     */
    static fromFirestore(doc) {
        return new User({ uid: doc.id, ...doc.data() });
    }

    /**
     * Creates a User instance from a Firebase Auth decoded token.
     * @param {object} decodedToken - From admin.auth().verifyIdToken()
     * @returns {User}
     */
    static fromAuthToken(decodedToken) {
        return new User({
            uid: decodedToken.uid,
            email: decodedToken.email || '',
            displayName: decodedToken.name || '',
            phone: decodedToken.phone_number || null,
        });
    }

    /**
     * Converts to a plain object for JSON serialization / Firestore writes.
     * @returns {object}
     */
    toJSON() {
        return {
            uid: this.uid,
            email: this.email,
            displayName: this.displayName,
            phone: this.phone,
            role: this.role,
            isActive: this.isActive,
            address: this.address,
            city: this.city,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}

module.exports = User;
