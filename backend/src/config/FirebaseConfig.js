const admin = require('firebase-admin');
const path = require('path');

class FirebaseConfig {
    static initialize() {
        try {
            if (admin.apps.length > 0) {
                return admin.firestore();
            }
            // serviceAccountKey.json is in the backend root folder
            const serviceAccountPath = path.resolve(__dirname, '../../serviceAccountKey.json');
            const serviceAccount = require(serviceAccountPath);

            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });

            console.log('Firebase Admin SDK initialized successfully');
            return admin.firestore();
        } catch (error) {
            console.error('Failed to initialize Firebase Admin SDK:', error.message);
            // In a real application, you might want to throw this error 
            // or handle it more gracefully depending on if DB is critical
            throw error;
        }
    }
}

module.exports = FirebaseConfig;
