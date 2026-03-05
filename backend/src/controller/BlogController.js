const express = require('express');
const BlogService = require('../service/BlogService');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * BlogController
 * Provides API endpoints for blog management.
 */
class BlogController {
    constructor() {
        this.router = express.Router();
        this.blogService = new BlogService();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/:parentDocId', this.getBlogPosts.bind(this));
        this.router.get('/:parentDocId/:postId', this.getBlogPost.bind(this));
        this.router.post('/:parentDocId', FirebaseAuthFilter, this.createBlogPost.bind(this));
        this.router.patch('/:parentDocId/:postId', FirebaseAuthFilter, this.updateBlogPost.bind(this));
        this.router.delete('/:parentDocId/:postId', FirebaseAuthFilter, this.deleteBlogPost.bind(this));
    }

    async getBlogPosts(req, res, next) {
        try {
            const { parentDocId } = req.params;
            const { page, limit } = req.query;
            const result = await this.blogService.getBlogPosts(parentDocId, parseInt(page) || 1, parseInt(limit) || 10);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async getBlogPost(req, res, next) {
        try {
            const { parentDocId, postId } = req.params;
            const result = await this.blogService.getBlogPost(parentDocId, postId);
            if (!result.success) return res.status(404).json(result);
            res.json(result.data);
        } catch (error) {
            next(error);
        }
    }

    async createBlogPost(req, res, next) {
        try {
            const { parentDocId } = req.params;
            const result = await this.blogService.createBlogPost(parentDocId, req.body);
            res.status(201).json(result.data);
        } catch (error) {
            next(error);
        }
    }

    async updateBlogPost(req, res, next) {
        try {
            const { parentDocId, postId } = req.params;
            const result = await this.blogService.updateBlogPost(parentDocId, postId, req.body);
            if (!result.success) return res.status(404).json(result);
            res.json(result.data);
        } catch (error) {
            next(error);
        }
    }

    async deleteBlogPost(req, res, next) {
        try {
            const { parentDocId, postId } = req.params;
            const result = await this.blogService.deleteBlogPost(parentDocId, postId);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = BlogController;
