const express = require('express');
const UserService = require('../service/UserService');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * UserController
 * Handles HTTP requests for User Management
 */
class UserController {
    constructor() {
        this.router = express.Router();
        this.userService = new UserService();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post('/', this.createUser.bind(this));
        this.router.post('/forgot-password', this.forgotPassword.bind(this));
        this.router.get('/profile', FirebaseAuthFilter, this.getProfile.bind(this));
        this.router.get('/', FirebaseAuthFilter, this.listUsers.bind(this));
    }

    async createUser(req, res, next) {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    async forgotPassword(req, res, next) {
        try {
            const { email } = req.body;
            if (!email) {
                return res.status(400).json({ error: 'Email is required' });
            }
            const link = await this.userService.generatePasswordResetLink(email);
            res.json({ message: 'Password reset link generated', link });
        } catch (error) {
            next(error);
        }
    }

    async getProfile(req, res, next) {
        try {
            const user = await this.userService.getUser(req.user.uid);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async listUsers(req, res, next) {
        try {
            // Role check should be here if needed
            const users = await this.userService.listUsers();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
