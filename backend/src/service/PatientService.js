const { patientPool } = require('../config/Database');

/**
 * PatientService
 * Manage Patient profiles from Neon PG (PATIENT_DATABASE)
 * For now, patients are derived from unique mobile/email in bookings.
 */
class PatientService {
    /**
     * Get all unique "patients" who have made bookings
     */
    async getAllPatients() {
        try {
            // Using DISTINCT on mobile/name to group patients
            const result = await patientPool.query(`
                SELECT DISTINCT ON (mobile) 
                mobile, patient_name as name, address, city, created_at 
                FROM bookings 
                ORDER BY mobile, created_at DESC
            `);
            return result.rows;
        } catch (error) {
            console.error('Error getting patients from Neon:', error);
            throw error;
        }
    }
}

module.exports = PatientService;
