const express = require('express');
const BookingService = require('../service/BookingService');
const FormService = require('../service/FormService');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * BookingController
 * Provides API endpoints for managing service bookings.
 */
class BookingController {
    constructor() {
        this.router = express.Router();
        this.bookingService = new BookingService();
        this.formService = new FormService();
        this.setupRoutes();
    }

    setupRoutes() {
        // Public route: submit a booking (Writes to GSheet)
        this.router.post('/', this.createBooking.bind(this));

        // Protected routes: admin management
        this.router.get('/new-requests', FirebaseAuthFilter, this.getNewRequests.bind(this));
        this.router.post('/promote', FirebaseAuthFilter, this.promoteBooking.bind(this));

        this.router.get('/', FirebaseAuthFilter, this.getAllBookings.bind(this));
        this.router.get('/:id', FirebaseAuthFilter, this.getBookingById.bind(this));
        this.router.patch('/:id/status', FirebaseAuthFilter, this.updateBookingStatus.bind(this));
        this.router.patch('/:id/assign', FirebaseAuthFilter, this.assignNurse.bind(this));
        this.router.delete('/:id', FirebaseAuthFilter, this.deleteBooking.bind(this));
    }

    async createBooking(req, res, next) {
        try {
            const result = await this.formService.submitBooking(req.body);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }

    async getNewRequests(req, res, next) {
        try {
            const bookings = await this.formService.getNewBookings();
            res.json(bookings);
        } catch (error) {
            next(error);
        }
    }

    async promoteBooking(req, res, next) {
        try {
            const result = await this.bookingService.promoteToNeon(req.body);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async getAllBookings(req, res, next) {
        try {
            const bookings = await this.bookingService.getAllBookings();
            res.json(bookings);
        } catch (error) {
            next(error);
        }
    }

    async assignNurse(req, res, next) {
        try {
            const { id } = req.params;
            const { nurseId } = req.body;
            const result = await this.bookingService.assignNurse(id, nurseId);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async getBookingById(req, res, next) {
        try {
            // Since IDs are now Neon IDs (integers), we might need to adjust
            const bookings = await this.bookingService.getAllBookings();
            const booking = bookings.find(b => b.id.toString() === req.params.id);
            if (!booking) return res.status(404).json({ error: 'Booking not found' });
            res.json(booking);
        } catch (error) {
            next(error);
        }
    }

    async updateBookingStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const result = await this.bookingService.updateBookingStatus(id, status);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async deleteBooking(req, res, next) {
        try {
            await this.bookingService.deleteBooking(req.params.id);
            res.json({ success: true });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = BookingController;
