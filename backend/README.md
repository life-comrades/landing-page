# Life Comrades Backend

A Node.js backend API built with Express.js following **Spring Boot architecture patterns**.

## 🏗️ Architecture

This backend follows a **layered architecture** similar to Spring Boot:

```
┌─────────────────────────────────────┐
│         Controllers Layer           │  ← @RestController
│  (HTTP Request/Response Handling)   │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│          Services Layer             │  ← @Service
│      (Business Logic)               │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│        Repositories Layer           │  ← @Repository
│    (Database Operations)            │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│         Database/Models             │  ← @Entity
└─────────────────────────────────────┘
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/                 # Configuration files (like application.properties)
│   │   ├── app.config.js       # Main application configuration
│   │   └── database.config.js  # Database configuration
│   │
│   ├── controllers/            # @RestController - Handle HTTP requests
│   │   └── user.controller.js  # User REST endpoints
│   │
│   ├── services/               # @Service - Business logic layer
│   │   └── user.service.js     # User business logic
│   │
│   ├── repositories/           # @Repository - Data access layer
│   │   └── user.repository.js  # User database operations
│   │
│   ├── models/                 # @Entity - Domain models
│   │   └── user.model.js       # User entity
│   │
│   ├── dto/                    # Data Transfer Objects
│   │   └── user.dto.js         # User DTOs for request/response
│   │
│   ├── middleware/             # Middleware (like @ControllerAdvice)
│   │   ├── errorHandler.js     # Global error handler
│   │   ├── requestLogger.js    # Request/response logging
│   │   └── validation.js       # Validation middleware
│   │
│   ├── routes/                 # Route definitions (@RequestMapping)
│   │   ├── index.js            # Main routes aggregator
│   │   └── user.routes.js      # User routes
│   │
│   ├── exceptions/             # Custom exceptions
│   │   └── customExceptions.js # Custom error classes
│   │
│   ├── utils/                  # Utility functions
│   │   └── helpers.js          # Helper functions
│   │
│   ├── app.js                  # Application configuration class
│   └── server.js               # Main entry point (@SpringBootApplication)
│
├── .env                        # Environment variables
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env
```
Edit `.env` and configure your settings.

3. **Start the development server:**
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with auto-reload |
| `npm test` | Run tests (to be implemented) |

## 🛠️ Tech Stack

- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management
- **nodemon** - Development auto-reload

## 📚 API Endpoints

### Base URL: `http://localhost:5000`

#### General Endpoints
- `GET /` - API information
- `GET /health` - Health check endpoint
- `GET /api` - List of available API endpoints

#### User Endpoints
- `GET /api/users` - Get all users (with pagination)
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🏛️ Spring Boot Equivalents

| Spring Boot | Node.js (This Project) |
|-------------|------------------------|
| `@SpringBootApplication` | `src/server.js` |
| `@RestController` | `src/controllers/*.controller.js` |
| `@Service` | `src/services/*.service.js` |
| `@Repository` | `src/repositories/*.repository.js` |
| `@Entity` | `src/models/*.model.js` |
| `@ControllerAdvice` | `src/middleware/errorHandler.js` |
| `@RequestMapping` | `src/routes/*.routes.js` |
| `@Valid` | `src/middleware/validation.js` |
| `application.properties` | `src/config/app.config.js` |
| Custom Exceptions | `src/exceptions/customExceptions.js` |
| DTOs | `src/dto/*.dto.js` |

## 🔧 Configuration

Configuration is centralized in `src/config/app.config.js`, similar to Spring Boot's `application.properties`:

```javascript
{
  port: 5000,
  env: 'development',
  database: { ... },
  jwt: { ... },
  cors: { ... }
}
```

## 🎯 Design Patterns

### 1. **Layered Architecture**
- **Controllers**: Handle HTTP requests/responses
- **Services**: Contain business logic
- **Repositories**: Handle database operations
- **Models**: Define data structures

### 2. **Dependency Injection**
Services and repositories are imported and used by higher layers.

### 3. **Error Handling**
Global error handler middleware catches all errors (like `@ControllerAdvice`).

### 4. **DTOs (Data Transfer Objects)**
Separate request/response objects from domain models.

### 5. **Exception Hierarchy**
Custom exception classes for different error types.

## 📖 Example Usage

### Creating a New Resource

1. **Create Model** (`src/models/post.model.js`)
2. **Create Repository** (`src/repositories/post.repository.js`)
3. **Create Service** (`src/services/post.service.js`)
4. **Create Controller** (`src/controllers/post.controller.js`)
5. **Create Routes** (`src/routes/post.routes.js`)
6. **Register Routes** in `src/routes/index.js`

## 🔒 Environment Variables

See `.env.example` for all available configuration options.

## 🚧 Development

The server uses **nodemon** for automatic restart during development. Any changes to `.js` files will trigger a reload.

## 📄 License

ISC

---

**Built with ❤️ following Spring Boot best practices**
