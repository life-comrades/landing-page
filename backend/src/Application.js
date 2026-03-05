const express = require('express');
const cors = require('cors');
const GlobalExceptionHandler = require('./exception/GlobalExceptionHandler');
const FirebaseConfig = require('./config/FirebaseConfig');
const FirebaseAuthFilter = require('./security/FirebaseAuthFilter');

class Application {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 5000;

        this.initializeFirebase();
        this.setupMiddleware();
        this.setupRoutes();
        this.setupErrorHandling();
    }

    initializeFirebase() {
        try {
            this.db = FirebaseConfig.initialize();
            console.log('Firestore connected');
        } catch (error) {
            console.error('Firestore connection failed. Application may not function correctly.');
        }
    }

    setupMiddleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    setupRoutes() {
        const UserController = require('./controller/UserController');
        const CareController = require('./controller/CareController');
        const ContentController = require('./controller/ContentController');
        const TestimonialController = require('./controller/TestimonialController');
        const BookingController = require('./controller/BookingController');
        const GoogleTestController = require('./controller/GoogleTestController');
        const NurseController = require('./controller/NurseController');
        const PatientController = require('./controller/PatientController');
        const ApplicationController = require('./controller/ApplicationController');
        const BlogController = require('./controller/BlogController');
        const JobController = require('./controller/JobController');

        const userController = new UserController();
        this.app.use('/api/users', userController.router);

        const careController = new CareController();
        this.app.use('/api/services', careController.router);

        const contentController = new ContentController();
        this.app.use('/api/content', contentController.router);

        const testimonialController = new TestimonialController();
        this.app.use('/api/testimonials', testimonialController.router);

        const bookingController = new BookingController();
        this.app.use('/api/bookings', bookingController.router);

        const DashboardController = require('./controller/DashboardController');
        const dashboardController = new DashboardController();
        this.app.use('/api/admin/dashboard', dashboardController.router);

        const googleController = new GoogleTestController();
        this.app.use('/api/google', googleController.router);

        const nurseController = new NurseController();
        this.app.use('/api/admin/nurses', nurseController.router);

        const patientController = new PatientController();
        this.app.use('/api/admin/patients', patientController.router);

        const applicationController = new ApplicationController();
        this.app.use('/api/admin/applications', applicationController.router);

        const blogController = new BlogController();
        this.app.use('/api/blogs', blogController.router);

        const jobController = new JobController();
        this.app.use('/api/jobs', jobController.router);

        // Protected test route
        this.app.get('/api/auth/me', FirebaseAuthFilter, (req, res) => {
            res.json({
                message: 'Authenticated successfully',
                user: req.user
            });
        });

        this.app.get('/', (req, res) => {
            res.json({ message: 'Welcome to the Node.js API (Spring Boot Style)' });
        });
    }

    setupErrorHandling() {
        this.app.use(GlobalExceptionHandler);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Application started successfully on port ${this.port}`);
            console.log(`Environment: ${process.env.NODE_ENV}`);
        });
    }
}

module.exports = Application;
