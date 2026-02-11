/**
 * Utility Functions
 * Helper functions for common operations
 */

class Utils {
    /**
     * Generate random string
     */
    static generateRandomString(length = 10) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    /**
     * Format date to ISO string
     */
    static formatDate(date) {
        return new Date(date).toISOString();
    }

    /**
     * Paginate array
     */
    static paginate(array, page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        return {
            data: array.slice(offset, offset + limit),
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total: array.length,
                totalPages: Math.ceil(array.length / limit),
            },
        };
    }

    /**
     * Sleep/delay function
     */
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Remove undefined/null values from object
     */
    static cleanObject(obj) {
        return Object.fromEntries(
            Object.entries(obj).filter(([_, v]) => v != null)
        );
    }
}

module.exports = Utils;
