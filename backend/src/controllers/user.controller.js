/**
 * User Controller
 * Similar to Spring Boot's @RestController
 * Handles HTTP requests and responses
 */

const UserService = require('../services/user.service');
const { asyncHandler } = require('../middleware/errorHandler');

class UserController {
    /**
     * Get all users
     * @route GET /api/users
     */
    static getAllUsers = asyncHandler(async (req, res) => {
        const { page = 1, limit = 10 } = req.query;
        const users = await UserService.findAll(page, limit);

        res.json({
            success: true,
            data: users,
            message: 'Users retrieved successfully',
        });
    });

    /**
     * Get user by ID
     * @route GET /api/users/:id
     */
    static getUserById = asyncHandler(async (req, res) => {
        const { id } = req.params;
        const user = await UserService.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'User not found',
                    statusCode: 404,
                },
            });
        }

        res.json({
            success: true,
            data: user,
            message: 'User retrieved successfully',
        });
    });

    /**
     * Create new user
     * @route POST /api/users
     */
    static createUser = asyncHandler(async (req, res) => {
        const userData = req.validatedBody || req.body;
        const user = await UserService.create(userData);

        res.status(201).json({
            success: true,
            data: user,
            message: 'User created successfully',
        });
    });

    /**
     * Update user
     * @route PUT /api/users/:id
     */
    static updateUser = asyncHandler(async (req, res) => {
        const { id } = req.params;
        const userData = req.validatedBody || req.body;
        const user = await UserService.update(id, userData);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'User not found',
                    statusCode: 404,
                },
            });
        }

        res.json({
            success: true,
            data: user,
            message: 'User updated successfully',
        });
    });

    /**
     * Delete user
     * @route DELETE /api/users/:id
     */
    static deleteUser = asyncHandler(async (req, res) => {
        const { id } = req.params;
        await UserService.delete(id);

        res.json({
            success: true,
            message: 'User deleted successfully',
        });
    });
}

module.exports = UserController;
