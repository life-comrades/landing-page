const express = require('express');
const FormService = require('../service/FormService');
const NurseService = require('../service/NurseService');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * ApplicationController
 * Handles Job Applications from GSheet and promotes to Staff DB
 */
class ApplicationController {
    constructor() {
        this.router = express.Router();
        this.formService = new FormService();
        this.nurseService = new NurseService();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/new', FirebaseAuthFilter, this.getNewApplications.bind(this));
        this.router.post('/promote', FirebaseAuthFilter, this.promoteToStaff.bind(this));
    }

    async getNewApplications(req, res, next) {
        try {
            const applications = await this.formService.getNewApplications();
            res.json(applications);
        } catch (error) {
            next(error);
        }
    }

    async promoteToStaff(req, res, next) {
        try {
            // This would also involve creating a Firebase Auth user in a real scenario
            const result = await this.nurseService.addStaff(req.body);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ApplicationController;
