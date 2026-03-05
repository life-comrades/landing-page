const express = require('express');
const ContentService = require('../service/ContentService');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * ContentController
 * Provides API endpoints for website content and SEO page metadata.
 */
class ContentController {
    constructor() {
        this.router = express.Router();
        this.contentService = new ContentService();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', this.getGlobalContent.bind(this));
        this.router.get('/isr', this.getISRData.bind(this));
        this.router.patch('/', FirebaseAuthFilter, this.updateGlobalContent.bind(this));
        this.router.get('/metadata', this.getAllPageMetadata.bind(this));
        this.router.get('/metadata/:pageId', this.getPageMetadata.bind(this));
        this.router.put('/metadata/:pageId', FirebaseAuthFilter, this.upsertPageMetadata.bind(this));
    }

    async getISRData(req, res, next) {
        try {
            const data = await this.contentService.getISRData();
            res.json(data);
        } catch (error) {
            next(error);
        }
    }

    async getGlobalContent(req, res, next) {
        try {
            const content = await this.contentService.getGlobalContent();
            res.json(content.toJSON ? content.toJSON() : content);
        } catch (error) {
            next(error);
        }
    }

    async updateGlobalContent(req, res, next) {
        try {
            const content = await this.contentService.updateGlobalContent(req.body);
            res.json(content.toJSON ? content.toJSON() : content);
        } catch (error) {
            next(error);
        }
    }

    async getAllPageMetadata(req, res, next) {
        try {
            const metadata = await this.contentService.getAllPageMetadata();
            res.json(metadata);
        } catch (error) {
            next(error);
        }
    }

    async getPageMetadata(req, res, next) {
        try {
            const { pageId } = req.params;
            const meta = await this.contentService.getPageMetadata(pageId);
            res.json(meta);
        } catch (error) {
            next(error);
        }
    }

    async upsertPageMetadata(req, res, next) {
        try {
            const { pageId } = req.params;
            const meta = await this.contentService.upsertPageMetadata(pageId, req.body);
            res.json(meta);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ContentController;
