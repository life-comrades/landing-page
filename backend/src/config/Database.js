const { Pool } = require('pg');

/**
 * Database Configuration for Neon PostgreSQL
 * Manages separate pools for Patient and Staff databases
 */

const patientPool = new Pool({
    connectionString: process.env.PATIENT_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const staffPool = new Pool({
    connectionString: process.env.STAFF_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Test connections
patientPool.on('connect', () => console.log('Connected to Patient Database'));
staffPool.on('connect', () => console.log('Connected to Staff Database'));

module.exports = {
    patientPool,
    staffPool
};
