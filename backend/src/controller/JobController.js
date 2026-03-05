const express = require('express');
const JobService = require('../service/JobService');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * JobController
 * Provides API endpoints for job management.
 */
class JobController {
    constructor() {
        this.router = express.Router();
        this.jobService = new JobService();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', this.getJobs.bind(this));
        this.router.get('/:id', this.getJob.bind(this));
        this.router.post('/', FirebaseAuthFilter, this.createJob.bind(this));
        this.router.patch('/:id', FirebaseAuthFilter, this.updateJob.bind(this));
        this.router.delete('/:id', FirebaseAuthFilter, this.deleteJob.bind(this));
    }

    async getJobs(req, res, next) {
        try {
            const result = await this.jobService.getJobs(req.query);
            res.json(result.data);
        } catch (error) {
            next(error);
        }
    }

    async getJob(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.jobService.getJob(id);
            if (!result.success) return res.status(404).json(result);
            res.json(result.data);
        } catch (error) {
            next(error);
        }
    }

    async createJob(req, res, next) {
        try {
            const result = await this.jobService.createJob(req.body);
            res.status(201).json(result.data);
        } catch (error) {
            next(error);
        }
    }

    async updateJob(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.jobService.updateJob(id, req.body);
            if (!result.success) return res.status(404).json(result);
            res.json(result.data);
        } catch (error) {
            next(error);
        }
    }

    async deleteJob(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.jobService.deleteJob(id);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = JobController;
