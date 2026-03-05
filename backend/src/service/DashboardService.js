const { patientPool, staffPool } = require('../config/Database');

/**
 * DashboardService
 * Aggregates statistics for the Admin Dashboard from Neon DB.
 */
class DashboardService {
    /**
     * Get overview stats for the dashboard
     */
    async getStats() {
        try {
            // Count from Neon for confirmed/active/completed
            const bookingsResult = await patientPool.query('SELECT status, COUNT(*) as count FROM bookings GROUP BY status');
            const nursesResult = await staffPool.query('SELECT COUNT(*) as count FROM staff WHERE role = \'nurse\' AND is_active = true');

            let stats = {
                totalBookings: 0,
                activeNurses: parseInt(nursesResult.rows[0].count),
                completedBookings: 0,
                pendingBookings: 0, // This should eventually include GSheet pending count
                activeBookings: 0
            };

            bookingsResult.rows.forEach(row => {
                const count = parseInt(row.count);
                stats.totalBookings += count;
                if (row.status === 'completed') stats.completedBookings += count;
                else if (row.status === 'confirmed' || row.status === 'assigned') stats.activeBookings += count;
            });

            return stats;
        } catch (error) {
            console.error('Error getting dashboard stats from Neon:', error);
            throw error;
        }
    }

    /**
     * Get available nurses (online/active) from staffPool
     */
    async getAvailableNurses() {
        try {
            const result = await staffPool.query(`
                SELECT id, name, specialty, rating, experience_level as experience, is_active 
                FROM staff 
                WHERE role = 'nurse' AND is_active = true 
                LIMIT 10
            `);
            return result.rows;
        } catch (error) {
            console.error('Error getting available nurses from Neon:', error);
            throw error;
        }
    }

    /**
     * Get urgent alerts based on recently promoted but unassigned bookings
     */
    async getUrgentAlerts() {
        try {
            const result = await patientPool.query(`
                SELECT id, service_name, patient_name, created_at 
                FROM bookings 
                WHERE status = 'confirmed' AND nurse_id IS NULL 
                ORDER BY created_at ASC 
                LIMIT 5
            `);

            return result.rows.map(row => ({
                id: row.id,
                title: 'Pending Assignment',
                desc: `${row.service_name} booking for ${row.patient_name} needs attention.`,
                time: this.formatTimeAgo(row.created_at),
                type: 'urgent'
            }));
        } catch (error) {
            console.error('Error getting urgent alerts from Neon:', error);
            throw error;
        }
    }

    formatTimeAgo(date) {
        if (!date) return 'Just now';
        const now = new Date();
        const d = new Date(date);
        const seconds = Math.floor((now - d) / 1000);

        if (seconds < 60) return `${seconds}s ago`;
        if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
        return `${Math.floor(seconds / 86400)}d ago`;
    }
}

module.exports = DashboardService;
