const FirebaseConfig = require('./src/config/FirebaseConfig');
const admin = require('firebase-admin');

async function createAdmin() {
    try {
        // 1. Initialize Firebase FIRST
        FirebaseConfig.initialize();
        console.log('Firebase initialized');

        // Now we can safely require the service
        const userService = require('./src/service/UserService');

        // 2. Define Admin User Data
        const adminEmail = 'mrroycool88@gmail.com';
        const adminPassword = 'admin@123';

        // 3. Check if user already exists
        try {
            const existingUser = await admin.auth().getUserByEmail(adminEmail);
            console.log(`User ${adminEmail} already exists with UID: ${existingUser.uid}. Updating role to admin...`);
            await userService.setUserRole(existingUser.uid, 'admin');
            console.log('✅ User role updated to admin.');
            process.exit(0);
        } catch (e) {
            if (e.code !== 'auth/user-not-found') {
                throw e;
            }
        }

        // 4. Create User
        console.log(`Creating new admin user: ${adminEmail}...`);
        const adminData = {
            email: adminEmail,
            displayName: 'Admin User',
            role: 'admin'
        };

        const newUser = await userService.createUser(adminData, adminPassword);

        console.log('✅ Admin user created successfully!');
        console.log('UID:', newUser.uid);
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        if (error.stack) console.error(error.stack);
        process.exit(1);
    }
}

createAdmin();
