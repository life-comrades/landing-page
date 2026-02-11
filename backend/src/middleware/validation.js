/**
 * Validation Middleware
 * Similar to Spring Boot's @Valid annotation
 */

class ValidationMiddleware {
    /**
     * Validate request body against schema
     */
    static validate(schema) {
        return (req, res, next) => {
            const { error, value } = schema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            });

            if (error) {
                const errors = error.details.map(detail => ({
                    field: detail.path.join('.'),
                    message: detail.message,
                }));

                return res.status(400).json({
                    success: false,
                    error: {
                        message: 'Validation failed',
                        statusCode: 400,
                        errors,
                    },
                });
            }

            req.validatedBody = value;
            next();
        };
    }

    /**
     * Validate query parameters
     */
    static validateQuery(schema) {
        return (req, res, next) => {
            const { error, value } = schema.validate(req.query, {
                abortEarly: false,
                stripUnknown: true,
            });

            if (error) {
                const errors = error.details.map(detail => ({
                    field: detail.path.join('.'),
                    message: detail.message,
                }));

                return res.status(400).json({
                    success: false,
                    error: {
                        message: 'Query validation failed',
                        statusCode: 400,
                        errors,
                    },
                });
            }

            req.validatedQuery = value;
            next();
        };
    }
}

module.exports = ValidationMiddleware;
