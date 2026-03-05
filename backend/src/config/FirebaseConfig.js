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
                    let rawEnv = process.env.FIREBASE_SERVICE_ACCOUNT.trim();
                    // Handle case where env var is wrapped in quotes
                    if ((rawEnv.startsWith("'") && rawEnv.endsWith("'")) || (rawEnv.startsWith('"') && rawEnv.endsWith('"'))) {
                        rawEnv = rawEnv.substring(1, rawEnv.length - 1);
                    }

                    let parsed = JSON.parse(rawEnv);
                    // If it's still a string after one parse, parse it AGAIN (handles extra quotes)
                    if (typeof parsed === 'string') {
                        console.log('Parsed as string, attempting second parse');
                        parsed = JSON.parse(parsed);
                    }
                    serviceAccount = parsed;

                    // Fix: Handle multiline private keys that might be improperly escaped in env variables
                    if (serviceAccount.private_key && typeof serviceAccount.private_key === 'string') {
                        if (serviceAccount.private_key.includes('\\n')) {
                            console.log('Applying fix for escaped newline characters in private_key');
                            serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
                        }
                        console.log('Private key found and validated in environment variable credentials');
                    } else {
                        console.warn('Private key NOT found or invalid in environment variable credentials');
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
