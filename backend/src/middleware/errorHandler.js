/**
 * Global Error Handler Middleware
 * Similar to Spring Boot's @ControllerAdvice
 */

const config = require('../config/app.config');

class ErrorHandler {
    /**
     * Handle errors globally
     */
    static errorHandler(err, req, res, next) {
        const statusCode = err.statusCode || err.status || 500;
        const message = err.message || 'Internal Server Error';

        console.error('❌ Error:', {
            message: err.message,
            stack: err.stack,
            path: req.path,
            method: req.method,
        });

        const errorResponse = {
            success: false,
            error: {
                message,
                statusCode,
                timestamp: new Date().toISOString(),
                path: req.path,
            },
        };

        // Include stack trace in development
        if (config.env === 'development') {
            errorResponse.error.stack = err.stack;
        }

        res.status(statusCode).json(errorResponse);
    }

    /**
     * Handle async errors
     */
    static asyncHandler(fn) {
        return (req, res, next) => {
            Promise.resolve(fn(req, res, next)).catch(next);
        };
    }
}

module.exports = ErrorHandler;
