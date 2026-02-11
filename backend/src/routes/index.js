/**
 * Main Routes Index
 * Aggregates all route modules
 */

const express = require('express');
const userRoutes = require('./user.routes');

const router = express.Router();

// API version and info
router.get('/', (req, res) => {
    res.json({
        message: 'Life Comrades API v1.0',
        version: '1.0.0',
        endpoints: {
            users: '/api/users',
            health: '/health',
        },
    });
});

// Mount route modules
router.use('/users', userRoutes);

// Add more routes here
// router.use('/posts', postRoutes);
// router.use('/auth', authRoutes);

module.exports = router;
