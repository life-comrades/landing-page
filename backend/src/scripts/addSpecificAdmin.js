const admin = require('firebase-admin');
const path = require('path');

const serviceAccountPath = path.resolve(__dirname, '../../serviceAccountKey.json');
const serviceAccount = require(serviceAccountPath);

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

async function addAdmin(email, password) {
    try {
        let user;
        try {
            user = await admin.auth().getUserByEmail(email);
            console.log(`User ${email} already exists. Updating role...`);
        } catch (e) {
            user = await admin.auth().createUser({
                email,
                password,
                displayName: 'Admin User',
                emailVerified: true
            });
            console.log(`Created new user: ${email}`);
        }

        await admin.auth().setCustomUserClaims(user.uid, { role: 'ADMIN' });
        console.log(`Successfully set role: ADMIN for ${email}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

addAdmin('lifecomrades2026@gmail.com', 'admin@123');
