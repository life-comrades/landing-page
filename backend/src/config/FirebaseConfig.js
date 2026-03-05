const admin = require('firebase-admin');
const path = require('path');

class FirebaseConfig {
    static initialize() {
        try {
            if (admin.apps.length > 0) {
                return admin.firestore();
            }

            let serviceAccount;
            if (process.env.FIREBASE_SERVICE_ACCOUNT) {
                console.log('Attempting to initialize Firebase using FIREBASE_SERVICE_ACCOUNT environment variable');
                try {
                    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
                    if (serviceAccount.private_key) {
                        console.log('Private key found in environment variable credentials');
                    } else {
                        console.warn('Private key NOT found in environment variable credentials');
                    }
                } catch (parseError) {
                    console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT env variable:', parseError.message);
                    throw parseError;
                }
            } else {
                console.log('FIREBASE_SERVICE_ACCOUNT env variable not found. Falling back to local serviceAccountKey.json');
                const serviceAccountPath = path.resolve(__dirname, '../../serviceAccountKey.json');
                serviceAccount = require(serviceAccountPath);
            }

            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });

            console.log('Firebase Admin SDK initialized successfully');
            return admin.firestore();
        } catch (error) {
            console.error('Failed to initialize Firebase Admin SDK:', error.message);
            throw error;
        }
    }
}

module.exports = FirebaseConfig;
