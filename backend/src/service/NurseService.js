const { staffPool } = require('../config/Database');

/**
 * NurseService
 * Manage Nurse profiles from Neon PG (STAFF_DATABASE)
 */
class NurseService {
    /**
     * Get all nurses
     */
    async getAllNurses() {
        try {
            const result = await staffPool.query('SELECT * FROM staff WHERE role = \'nurse\' ORDER BY created_at DESC');
            return result.rows;
        } catch (error) {
            console.error('Error getting nurses from Neon:', error);
            throw error;
        }
    }

    /**
     * Update nurse status
     */
    async updateStatus(id, isActive) {
        try {
            await staffPool.query('UPDATE staff SET is_active = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2', [isActive, id]);
            return { success: true };
        } catch (error) {
            console.error('Error updating nurse status in Neon:', error);
            throw error;
        }
    }

    /**
     * Add new staff/nurse (Promotion from application)
     */
    async addStaff(data) {
        const query = `
            INSERT INTO staff (uid, name, email, mobile, role, experience_level, specialty, rating, is_active)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *
        `;
        const values = [
            data.uid || null,
            data.name,
            data.email,
            data.mobile,
            data.role || 'nurse',
            data.experienceLevel,
            data.specialty,
            data.rating || 0.0,
            true
        ];

        try {
            const result = await staffPool.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error adding staff to Neon:', error);
            throw error;
        }
    }
}

module.exports = NurseService;
