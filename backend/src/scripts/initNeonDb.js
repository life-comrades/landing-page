require('dotenv').config();
const NeonConfig = require('../config/NeonConfig');

async function initDb() {
    console.log('Initializing Neon Database tables...');
    try {
        // Create Patients Table (For users with role 'user')
        await NeonConfig.query(`
            CREATE TABLE IF NOT EXISTS patients (
                uid VARCHAR(128) PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                display_name VARCHAR(255),
                photo_url TEXT,
                phone VARCHAR(50),
                role VARCHAR(50) DEFAULT 'user',
                is_active BOOLEAN DEFAULT true,
                address TEXT,
                city VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Patients table initialized');

        // Create Staff Table (For admin, nurse, doctor)
        await NeonConfig.query(`
            CREATE TABLE IF NOT EXISTS staff (
                uid VARCHAR(128) PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                display_name VARCHAR(255),
                photo_url TEXT,
                phone VARCHAR(50),
                role VARCHAR(50) NOT NULL,
                is_active BOOLEAN DEFAULT true,
                address TEXT,
                city VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Staff table initialized');

        console.log('Database initialization completed successfully.');
    } catch (error) {
        console.error('❌ Failed to initialize database:', error);
    } finally {
        process.exit(0);
    }
}

initDb();
