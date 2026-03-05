const express = require('express');
const CareService = require('../service/CareService');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * CareController
 * Provides API endpoints for healthcare services management.
 */
class CareController {
    constructor() {
        this.router = express.Router();
        this.careService = new CareService();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', this.getAllServices.bind(this));
        this.router.get('/:id', this.getServiceById.bind(this));
        this.router.post('/', FirebaseAuthFilter, this.createService.bind(this));
        this.router.patch('/:id', FirebaseAuthFilter, this.updateService.bind(this));
        this.router.delete('/:id', FirebaseAuthFilter, this.deleteService.bind(this));
    }

    async getAllServices(req, res, next) {
        try {
            const services = await this.careService.getAllServices();
            res.json(services.map(s => s.toJSON()));
        } catch (error) {
            next(error);
        }
    }

    async getServiceById(req, res, next) {
        try {
            const { id } = req.params;
            const service = await this.careService.getServiceById(id);
            res.json(service.toJSON());
        } catch (error) {
            next(error);
        }
    }

    async createService(req, res, next) {
        try {
            const { id, ...data } = req.body;
            if (!id) {
                return res.status(400).json({ error: 'Service id is required' });
            }
            const result = await this.careService.createService(id, data);
            res.status(201).json(result.data);
        } catch (error) {
            next(error);
        }
    }

    async updateService(req, res, next) {
        try {
            const { id } = req.params;
            const service = await this.careService.updateService(id, req.body);
            res.json(service.toJSON());
        } catch (error) {
            next(error);
        }
    }

    async deleteService(req, res, next) {
        try {
            const { id } = req.params;
            await this.careService.deleteService(id);
            res.json({ message: `Service '${id}' deleted successfully` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CareController;
