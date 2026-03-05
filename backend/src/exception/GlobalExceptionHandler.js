const GlobalExceptionHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    // 1. Prepare detailed log information
    const timestamp = new Date().toISOString();
    const method = req.method;
    const path = req.originalUrl;
    const userId = req.user ? req.user.uid : 'Unauthenticated';

    // 2. Safely extract request body (masking sensitive fields if needed)
    let safeBody = { ...req.body };
    if (safeBody.password) safeBody.password = '[REDACTED]';

    // 3. Construct and print the detailed log message
    console.error(`\n[${timestamp}] ❌ ERROR: ${status} ${message}`);
    console.error(`► Request: ${method} ${path}`);
    console.error(`► User ID: ${userId}`);
    if (Object.keys(req.query).length > 0) {
        console.error(`► Query: ${JSON.stringify(req.query)}`);
    }
    if (Object.keys(safeBody).length > 0) {
        console.error(`► Body: ${JSON.stringify(safeBody)}`);
    }
    console.error(`► Stack Trace:\n${err.stack}\n`);

    // 4. Send response to client
    res.status(status).json({
        timestamp: timestamp,
        status: status,
        error: err.name || 'Error',
        message: message,
        path: req.originalUrl
    });
};

module.exports = GlobalExceptionHandler;
