require('dotenv').config();
const app = require('./app');
const config = require('./config/app.config');

const PORT = config.port;

const server = app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('🚀 Life Comrades Backend Server');
    console.log('='.repeat(50));
    console.log(`📍 Environment: ${config.env}`);
    console.log(`🔗 Server URL: http://localhost:${PORT}`);
    console.log(`💚 Health Check: http://localhost:${PORT}/health`);
    console.log(`📚 API Base: http://localhost:${PORT}/api`);
    console.log('='.repeat(50));
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\nSIGINT signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
});

module.exports = server;
