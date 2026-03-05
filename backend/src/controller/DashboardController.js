const express = require('express');
const DashboardService = require('../service/DashboardService');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * DashboardController
 * Providing administrative statistics and real-time dashboard data.
 */
class DashboardController {
    constructor() {
        this.router = express.Router();
        this.dashboardService = new DashboardService();
        this.setupRoutes();
    }

    setupRoutes() {
        // All routes are protected for admin
        this.router.get('/stats', FirebaseAuthFilter, this.getStats.bind(this));
        this.router.get('/nurses', FirebaseAuthFilter, this.getNurses.bind(this));
        this.router.get('/alerts', FirebaseAuthFilter, this.getAlerts.bind(this));
    }

    async getStats(req, res, next) {
        try {
            const stats = await this.dashboardService.getStats();
            res.json(stats);
        } catch (error) {
            next(error);
        }
    }

    async getNurses(req, res, next) {
        try {
            const nurses = await this.dashboardService.getAvailableNurses();
            res.json(nurses);
        } catch (error) {
            next(error);
        }
    }

    async getAlerts(req, res, next) {
        try {
            const alerts = await this.dashboardService.getUrgentAlerts();
            res.json(alerts);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = DashboardController;
