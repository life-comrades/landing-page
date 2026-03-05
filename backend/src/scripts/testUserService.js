const admin = require('firebase-admin');
const FirebaseConfig = require('../config/FirebaseConfig');
// Initialize Firebase FIRST
FirebaseConfig.initialize();

const UserService = require('../service/UserService');
const NeonConfig = require('../config/NeonConfig');

async function testUserService() {
    try {
        const timestamp = Date.now();
        const testPatientEmail = `patient_${timestamp}@example.com`;
        const testStaffEmail = `staff_${timestamp}@example.com`;

        console.log(`\n1. Creating Patient User: ${testPatientEmail}`);
        const patient = await UserService.createUser({
            email: testPatientEmail,
            displayName: 'Test Patient',
            role: 'user'
        }, 'TestPass123!');
        console.log('Patient User Created:', patient.uid);

        console.log(`\n2. Creating Staff User: ${testStaffEmail}`);
        const staff = await UserService.createUser({
            email: testStaffEmail,
            displayName: 'Test Staff',
            role: 'nurse'
        }, 'TestPass123!');
        console.log('Staff User Created:', staff.uid);

        console.log('\n3. Verifying Patients Table...');
        const patRes = await NeonConfig.query('SELECT email, role FROM patients WHERE uid = $1', [patient.uid]);
        console.log('Found in patients DB:', patRes.rows[0]);

        console.log('\n4. Verifying Staff Table...');
        const staffRes = await NeonConfig.query('SELECT email, role FROM staff WHERE uid = $1', [staff.uid]);
        console.log('Found in staff DB:', staffRes.rows[0]);

        console.log('\n5. Cleaning up test users...');
        await UserService.deleteUser(patient.uid);
        await UserService.deleteUser(staff.uid);
        console.log('Cleanup successful.');

    } catch (error) {
        console.error('Test Failed:', error);
    } finally {
        process.exit(0);
    }
}

testUserService();
