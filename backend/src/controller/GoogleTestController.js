const express = require('express');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * GoogleTestController
 * Provides lightweight health-check and test endpoints for Google service integrations.
 */
class GoogleTestController {
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/health', this.healthCheck.bind(this));
        this.router.get('/auth-test', FirebaseAuthFilter, this.authTest.bind(this));
    }

    healthCheck(req, res) {
        res.json({
            status: 'ok',
            message: 'Google integration endpoint is reachable',
            timestamp: new Date().toISOString(),
        });
    }

    authTest(req, res) {
        res.json({
            status: 'ok',
            message: 'Firebase auth verified',
            uid: req.user.uid,
            email: req.user.email || null,
        });
    }
}

module.exports = GoogleTestController;
