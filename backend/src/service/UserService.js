const admin = require('firebase-admin');

/**
 * UserService
 * Handles User Authentication and Management via Firebase Admin SDK
 */
class UserService {
    /**
     * Create a new user with a temporary password and initial role
     * @param {Object} userData { email, password, displayName, role }
     */
    async createUser(userData) {
        try {
            const { email, password, displayName, role = 'USER' } = userData;

            // Create user in Firebase Auth
            const userRecord = await admin.auth().createUser({
                email,
                password,
                displayName,
                emailVerified: false,
                disabled: false,
            });

            // Set custom claims for RBAC (Role-Based Access Control)
            await admin.auth().setCustomUserClaims(userRecord.uid, { role });

            return {
                uid: userRecord.uid,
                email: userRecord.email,
                displayName: userRecord.displayName,
                role: role
            };
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    /**
     * Set or update a user's role
     * @param {string} uid 
     * @param {string} role 
     */
    async setUserRole(uid, role) {
        try {
            await admin.auth().setCustomUserClaims(uid, { role });
            return { success: true, message: `Role updated to ${role} for user ${uid}` };
        } catch (error) {
            console.error('Error setting user role:', error);
            throw error;
        }
    }

    /**
     * Get user details including custom claims
     * @param {string} uid 
     */
    async getUser(uid) {
        try {
            const userRecord = await admin.auth().getUser(uid);
            return {
                uid: userRecord.uid,
                email: userRecord.email,
                displayName: userRecord.displayName,
                role: userRecord.customClaims?.role || 'USER',
                lastSignInTime: userRecord.metadata.lastSignInTime,
                creationTime: userRecord.metadata.creationTime
            };
        } catch (error) {
            console.error('Error getting user:', error);
            throw error;
        }
    }

    /**
     * Generate a password reset link
     * @param {string} email 
     */
    async generatePasswordResetLink(email) {
        try {
            const link = await admin.auth().generatePasswordResetLink(email);
            return link;
        } catch (error) {
            console.error('Error generating reset link:', error);
            throw error;
        }
    }

    /**
     * List all users (with pagination)
     * @param {number} maxResults 
     * @param {string} pageToken 
     */
    async listUsers(maxResults = 100, pageToken) {
        try {
            const listUsersResult = await admin.auth().listUsers(maxResults, pageToken);
            const users = listUsersResult.users.map(user => ({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                role: user.customClaims?.role || 'USER',
                disabled: user.disabled
            }));

            return {
                users,
                pageToken: listUsersResult.pageToken
            };
        } catch (error) {
            console.error('Error listing users:', error);
            throw error;
        }
    }

    /**
     * Delete a user
     * @param {string} uid 
     */
    async deleteUser(uid) {
        try {
            await admin.auth().deleteUser(uid);
            return { success: true };
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
}

module.exports = UserService;
