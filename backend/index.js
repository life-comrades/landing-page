require('dotenv').config();
const Application = require('./src/Application');

const application = new Application();

// Vercel handles starting the server, export the underlying Express app
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    application.start();
}

module.exports = application.app;
