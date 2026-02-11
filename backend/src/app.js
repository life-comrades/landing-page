const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const { requestLogger } = require('./middleware/requestLogger');
const routes = require('./routes');

class Application {
    constructor() {
        this.app = express();
        this.configureMiddleware();
        this.configureRoutes();
        this.configureErrorHandling();
    }

    configureMiddleware() {
        // CORS configuration
        this.app.use(cors());

        // Body parsing middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Request logging
        this.app.use(requestLogger);
    }

    configureRoutes() {
        // Health check endpoint
        this.app.get('/health', (req, res) => {
            res.json({
                status: 'UP',
                timestamp: new Date().toISOString(),
                uptime: process.uptime()
            });
        });

        // API routes
        this.app.use('/api', routes);

        // Root endpoint
        this.app.get('/', (req, res) => {
            res.json({
                message: 'Life Comrades API',
                version: '1.0.0',
                documentation: '/api/docs'
            });
        });
    }

    configureErrorHandling() {
        // 404 handler
        this.app.use((req, res) => {
            res.status(404).json({
                error: 'Not Found',
                message: `Cannot ${req.method} ${req.path}`,
                timestamp: new Date().toISOString()
            });
        });

        // Global error handler
        this.app.use(errorHandler);
    }

    getExpressApp() {
        return this.app;
    }
}

module.exports = new Application().getExpressApp();
