/**
 * User Repository
 * Similar to Spring Boot's @Repository
 * Handles database operations
 */

class UserRepository {
    /**
     * Find all users with pagination
     */
    static async findAll(limit = 10, offset = 0) {
        // TODO: Implement database query
        // Example with mock data:
        return [
            { id: 1, name: 'John Doe', email: 'john@example.com', createdAt: new Date() },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date() },
        ];
    }

    /**
     * Find user by ID
     */
    static async findById(id) {
        // TODO: Implement database query
        // Example: SELECT * FROM users WHERE id = ?
        return { id, name: 'John Doe', email: 'john@example.com', createdAt: new Date() };
    }

    /**
     * Find user by email
     */
    static async findByEmail(email) {
        // TODO: Implement database query
        // Example: SELECT * FROM users WHERE email = ?
        return null;
    }

    /**
     * Create new user
     */
    static async create(userData) {
        // TODO: Implement database insert
        // Example: INSERT INTO users (name, email) VALUES (?, ?)
        return {
            id: Date.now(),
            ...userData,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
    }

    /**
     * Update user
     */
    static async update(id, userData) {
        // TODO: Implement database update
        // Example: UPDATE users SET name = ?, email = ? WHERE id = ?
        return {
            id,
            ...userData,
            updatedAt: new Date(),
        };
    }

    /**
     * Delete user
     */
    static async delete(id) {
        // TODO: Implement database delete
        // Example: DELETE FROM users WHERE id = ?
        return true;
    }

    /**
     * Count total users
     */
    static async count() {
        // TODO: Implement database count
        // Example: SELECT COUNT(*) FROM users
        return 0;
    }
}

module.exports = UserRepository;
