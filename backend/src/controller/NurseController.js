const express = require('express');
const NurseService = require('../service/NurseService');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

class NurseController {
    constructor() {
        this.router = express.Router();
        this.service = new NurseService();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', FirebaseAuthFilter, this.getAll.bind(this));
        this.router.patch('/:id/status', FirebaseAuthFilter, this.updateStatus.bind(this));
    }

    async getAll(req, res, next) {
        try {
            const nurses = await this.service.getAllNurses();
            res.json(nurses);
        } catch (error) {
            next(error);
        }
    }

    async updateStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { isActive } = req.body;
            const result = await this.service.updateStatus(id, isActive);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = NurseController;
