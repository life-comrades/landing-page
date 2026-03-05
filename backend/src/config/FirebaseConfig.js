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
                try {
                    let rawEnv = process.env.FIREBASE_SERVICE_ACCOUNT.trim();
                    if ((rawEnv.startsWith("'") && rawEnv.endsWith("'")) || (rawEnv.startsWith('"') && rawEnv.endsWith('"'))) {
                        rawEnv = rawEnv.substring(1, rawEnv.length - 1);
                    }

                    let parsed = JSON.parse(rawEnv);
                    if (typeof parsed === 'string') {
                        parsed = JSON.parse(parsed);
                    }
                    serviceAccount = parsed;

                    if (serviceAccount.private_key && typeof serviceAccount.private_key === 'string' && serviceAccount.private_key.includes('\\n')) {
                        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
                    }
                } catch (parseError) {
                    console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT env variable');
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
