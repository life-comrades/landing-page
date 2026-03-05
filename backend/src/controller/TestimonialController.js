const express = require('express');
const admin = require('firebase-admin');
const Testimonial = require('../model/Testimonial');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * TestimonialController
 * Provides API endpoints for managing patient testimonials.
 */
class TestimonialController {
    constructor() {
        this.router = express.Router();
        this.collection = null;
        this.setupRoutes();
    }

    getCollection() {
        if (!this.collection) {
            this.collection = admin.firestore().collection('testimonials');
        }
        return this.collection;
    }

    setupRoutes() {
        this.router.get('/', this.getAllTestimonials.bind(this));
        this.router.get('/:id', this.getTestimonialById.bind(this));
        this.router.post('/', FirebaseAuthFilter, this.createTestimonial.bind(this));
        this.router.patch('/:id', FirebaseAuthFilter, this.updateTestimonial.bind(this));
        this.router.delete('/:id', FirebaseAuthFilter, this.deleteTestimonial.bind(this));
    }

    async getAllTestimonials(req, res, next) {
        try {
            const { serviceId } = req.query;
            let query = this.getCollection();
            if (serviceId) {
                query = query.where('serviceId', '==', serviceId);
            }
            const snapshot = await query.get();
            const testimonials = snapshot.docs.map(doc => Testimonial.fromFirestore(doc).toJSON());
            res.json(testimonials);
        } catch (error) {
            next(error);
        }
    }

    async getTestimonialById(req, res, next) {
        try {
            const doc = await this.getCollection().doc(req.params.id).get();
            if (!doc.exists) {
                return res.status(404).json({ error: `Testimonial '${req.params.id}' not found` });
            }
            res.json(Testimonial.fromFirestore(doc).toJSON());
        } catch (error) {
            next(error);
        }
    }

    async createTestimonial(req, res, next) {
        try {
            const testimonial = new Testimonial(req.body);
            const docRef = await this.getCollection().add({
                ...testimonial.toJSON(),
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            });
            res.status(201).json({ id: docRef.id, ...testimonial.toJSON() });
        } catch (error) {
            next(error);
        }
    }

    async updateTestimonial(req, res, next) {
        try {
            const { id } = req.params;
            const doc = await this.getCollection().doc(id).get();
            if (!doc.exists) {
                return res.status(404).json({ error: `Testimonial '${id}' not found` });
            }
            await this.getCollection().doc(id).set(
                { ...req.body, updatedAt: admin.firestore.FieldValue.serverTimestamp() },
                { merge: true }
            );
            const updated = await this.getCollection().doc(id).get();
            res.json(Testimonial.fromFirestore(updated).toJSON());
        } catch (error) {
            next(error);
        }
    }

    async deleteTestimonial(req, res, next) {
        try {
            const { id } = req.params;
            const doc = await this.getCollection().doc(id).get();
            if (!doc.exists) {
                return res.status(404).json({ error: `Testimonial '${id}' not found` });
            }
            await this.getCollection().doc(id).delete();
            res.json({ message: `Testimonial '${id}' deleted successfully` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TestimonialController;
