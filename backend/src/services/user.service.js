/**
 * User Service
 * Similar to Spring Boot's @Service
 * Contains business logic
 */

const UserRepository = require('../repositories/user.repository');
const { NotFoundError, ValidationError } = require('../exceptions/customExceptions');

class UserService {
    /**
     * Find all users with pagination
     */
    static async findAll(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        return await UserRepository.findAll(limit, offset);
    }

    /**
     * Find user by ID
     */
    static async findById(id) {
        const user = await UserRepository.findById(id);
        if (!user) {
            throw new NotFoundError(`User with ID ${id} not found`);
        }
        return user;
    }

    /**
     * Create new user
     */
    static async create(userData) {
        // Business logic validation
        if (!userData.email || !userData.name) {
            throw new ValidationError('Email and name are required');
        }

        // Check if user already exists
        const existingUser = await UserRepository.findByEmail(userData.email);
        if (existingUser) {
            throw new ValidationError('User with this email already exists');
        }

        return await UserRepository.create(userData);
    }

    /**
     * Update user
     */
    static async update(id, userData) {
        const user = await UserRepository.findById(id);
        if (!user) {
            throw new NotFoundError(`User with ID ${id} not found`);
        }

        return await UserRepository.update(id, userData);
    }

    /**
     * Delete user
     */
    static async delete(id) {
        const user = await UserRepository.findById(id);
        if (!user) {
            throw new NotFoundError(`User with ID ${id} not found`);
        }

        return await UserRepository.delete(id);
    }

    /**
     * Find user by email
     */
    static async findByEmail(email) {
        return await UserRepository.findByEmail(email);
    }
}

module.exports = UserService;
