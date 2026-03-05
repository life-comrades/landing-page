require('dotenv').config();
const { patientPool, staffPool } = require('./src/config/Database');

const setupPatientDb = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS bookings (
            id SERIAL PRIMARY KEY,
            gsheet_timestamp VARCHAR(100),
            service_id VARCHAR(50),
            service_name VARCHAR(100),
            booking_date VARCHAR(50),
            booking_time VARCHAR(50),
            patient_name VARCHAR(100),
            patient_age VARCHAR(10),
            patient_gender VARCHAR(20),
            guardian_name VARCHAR(100),
            relationship VARCHAR(50),
            mobile VARCHAR(20),
            alternate_mobile VARCHAR(20),
            address TEXT,
            city VARCHAR(100),
            status VARCHAR(50) DEFAULT 'confirmed',
            nurse_id VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    try {
        await patientPool.query(query);
        console.log('Patient Database initialized successfully.');
    } catch (error) {
        console.error('Error initializing Patient Database:', error);
    }
};

const setupStaffDb = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS staff (
            id SERIAL PRIMARY KEY,
            uid VARCHAR(100) UNIQUE,
            name VARCHAR(100),
            email VARCHAR(100) UNIQUE,
            mobile VARCHAR(20),
            role VARCHAR(50) DEFAULT 'nurse',
            experience_level VARCHAR(50),
            specialty VARCHAR(100),
            rating DECIMAL(3,2) DEFAULT 0.0,
            is_active BOOLEAN DEFAULT true,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    try {
        await staffPool.query(query);
        console.log('Staff Database initialized successfully.');
    } catch (error) {
        console.error('Error initializing Staff Database:', error);
    }
};

const runSetup = async () => {
    await setupPatientDb();
    await setupStaffDb();
    process.exit(0);
};

runSetup();
