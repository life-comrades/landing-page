const { patientPool } = require('../config/Database');

/**
 * BookingService
 * Handles all Neon PostgreSQL operations for confirmed service bookings.
 * (PATIENT_DATABASE)
 */
class BookingService {
    /**
     * Retrieves all processed bookings from Neon DB.
     */
    async getAllBookings() {
        try {
            const result = await patientPool.query('SELECT * FROM bookings ORDER BY created_at DESC');
            return result.rows.map(row => ({
                id: row.id,
                serviceId: row.service_id,
                serviceName: row.service_name,
                date: row.booking_date,
                time: row.booking_time,
                patientName: row.patient_name,
                patientAge: row.patient_age,
                patientGender: row.patient_gender,
                guardianName: row.guardian_name,
                relationship: row.relationship,
                mobile: row.mobile,
                alternateMobile: row.alternate_mobile,
                address: row.address,
                city: row.city,
                status: row.status,
                nurseId: row.nurse_id,
                createdAt: row.created_at,
                updatedAt: row.updated_at
            }));
        } catch (error) {
            console.error('Error getting all bookings from Neon:', error);
            throw error;
        }
    }

    /**
     * Inserts a new booking into Neon (Promotion from GSheet)
     */
    async promoteToNeon(data) {
        const query = `
            INSERT INTO bookings (
                gsheet_timestamp, service_id, service_name, booking_date, booking_time,
                patient_name, patient_age, patient_gender, guardian_name, relationship,
                mobile, alternate_mobile, address, city, status
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
            RETURNING *
        `;
        const values = [
            data.gsheetTimestamp || null,
            data.serviceId,
            data.serviceName,
            data.date,
            data.time,
            data.patientName,
            data.patientAge,
            data.patientGender,
            data.guardianName,
            data.relationship,
            data.mobile,
            data.alternateMobile,
            data.address,
            data.city,
            data.status || 'confirmed'
        ];

        try {
            const result = await patientPool.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error promoting booking to Neon:', error);
            throw error;
        }
    }

    /**
     * Updates booking status in Neon
     */
    async updateBookingStatus(id, status) {
        const query = 'UPDATE bookings SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *';
        try {
            const result = await patientPool.query(query, [status, id]);
            if (result.rows.length === 0) throw new Error(`Booking ${id} not found`);
            return result.rows[0];
        } catch (error) {
            console.error('Error updating booking status in Neon:', error);
            throw error;
        }
    }

    /**
     * Assigns a nurse to a booking
     */
    async assignNurse(id, nurseId) {
        const query = 'UPDATE bookings SET nurse_id = $1, status = \'assigned\', updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *';
        try {
            const result = await patientPool.query(query, [nurseId, id]);
            if (result.rows.length === 0) throw new Error(`Booking ${id} not found`);
            return result.rows[0];
        } catch (error) {
            console.error('Error assigning nurse in Neon:', error);
            throw error;
        }
    }

    /**
     * Deletes a booking from Neon
     */
    async deleteBooking(id) {
        try {
            await patientPool.query('DELETE FROM bookings WHERE id = $1', [id]);
        } catch (error) {
            console.error('Error deleting booking from Neon:', error);
            throw error;
        }
    }
}

module.exports = BookingService;
