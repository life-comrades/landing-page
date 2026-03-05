const admin = require('firebase-admin');
const path = require('path');

// Initialize Firebase Admin
const serviceAccountPath = path.resolve(__dirname, '../../serviceAccountKey.json');
const serviceAccount = require(serviceAccountPath);

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

/**
 * Script to create an initial Admin User
 */
async function createAdminUser() {
    const adminEmail = 'admin@lifecomrades.com';
    const adminPassword = 'AdminPassword123!'; // User should change this

    try {
        let userRecord;
        try {
            userRecord = await admin.auth().getUserByEmail(adminEmail);
            console.log('User already exists. Updating claims...');
        } catch (error) {
            userRecord = await admin.auth().createUser({
                email: adminEmail,
                password: adminPassword,
                displayName: 'System Admin',
                emailVerified: true
            });
            console.log('Successfully created new Admin user.');
        }

        // Set custom claims
        await admin.auth().setCustomUserClaims(userRecord.uid, { role: 'ADMIN' });
        console.log('Successfully set role: ADMIN for', adminEmail);

        console.log('\n--- ADMIN CREDENTIALS ---');
        console.log('Email:', adminEmail);
        console.log('Password:', adminPassword);
        console.log('-------------------------\n');

    } catch (error) {
        console.error('Error creating admin user:', error);
    }
}

createAdminUser();
