const express = require('express');
const FirebaseAuthFilter = require('../security/FirebaseAuthFilter');

/**
 * GoogleTestController
 * Provides lightweight health-check and test endpoints for Google service integrations.
 */
class GoogleTestController {
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/health', this.healthCheck.bind(this));
        this.router.get('/auth-test', FirebaseAuthFilter, this.authTest.bind(this));
        this.router.get('/debug-firebase', this.debugFirebase.bind(this));
    }

    healthCheck(req, res) {
        const admin = require('firebase-admin');
        const appCount = admin.apps.length;
        const mainApp = appCount > 0 ? admin.apps[0] : null;

        res.json({
            status: 'ok',
            message: 'Google integration endpoint is reachable',
            timestamp: new Date().toISOString(),
            firebase: {
                initialized: appCount > 0,
                appName: mainApp ? mainApp.name : 'N/A',
                isDefault: mainApp ? mainApp.name === '[DEFAULT]' : false,
                usingEnv: !!process.env.FIREBASE_SERVICE_ACCOUNT,
                envLength: process.env.FIREBASE_SERVICE_ACCOUNT ? process.env.FIREBASE_SERVICE_ACCOUNT.length : 0,
            }
        });
    }

    authTest(req, res) {
        res.json({
            status: 'ok',
            message: 'Firebase auth verified',
            uid: req.user.uid,
            email: req.user.email || null,
        });
    }

    async debugFirebase(req, res) {
        try {
            const admin = require('firebase-admin');
            const firebaseStatus = {
                apps: admin.apps.map(a => a.name),
                envPresent: !!process.env.FIREBASE_SERVICE_ACCOUNT,
                envType: typeof process.env.FIREBASE_SERVICE_ACCOUNT,
            };

            if (process.env.FIREBASE_SERVICE_ACCOUNT) {
                try {
                    const parsed = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
                    firebaseStatus.parsedType = typeof parsed;
                    if (typeof parsed === 'object' && parsed !== null) {
                        firebaseStatus.keysFound = Object.keys(parsed);
                        firebaseStatus.hasPrivateKey = !!parsed.private_key;
                        firebaseStatus.projectId = parsed.project_id;
                        firebaseStatus.clientEmail = parsed.client_email;

                        // Sanity check on private key content
                        if (parsed.private_key && typeof parsed.private_key === 'string') {
                            firebaseStatus.keyLength = parsed.private_key.length;
                            firebaseStatus.hasNewline = parsed.private_key.includes('\n');
                            firebaseStatus.hasEscapedNewline = parsed.private_key.includes('\\n');
                            firebaseStatus.keyHeader = parsed.private_key.substring(0, 30);
                        }
                    }
                } catch (e) {
                    firebaseStatus.parseError = e.message;
                }
            }

            res.json(firebaseStatus);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = GoogleTestController;
