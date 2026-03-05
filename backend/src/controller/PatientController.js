const express = require('express');
const PatientService = require('../service/PatientService');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

class PatientController {
    constructor() {
        this.router = express.Router();
        this.service = new PatientService();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', FirebaseAuthFilter, this.getAll.bind(this));
    }

    async getAll(req, res, next) {
        try {
            const patients = await this.service.getAllPatients();
            res.json(patients);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = PatientController;
