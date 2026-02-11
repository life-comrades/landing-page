# Backend Architecture Guide

## 🏗️ Layered Architecture (Spring Boot Style)

This backend follows the **MVC + Service + Repository** pattern commonly used in Spring Boot applications.

## Layer Responsibilities

### 1. **Controllers Layer** (`src/controllers/`)
**Spring Boot Equivalent:** `@RestController`

**Responsibilities:**
- Handle HTTP requests and responses
- Parse request parameters, body, and headers
- Call appropriate service methods
- Return formatted responses
- Handle HTTP status codes

**Example:**
```javascript
class UserController {
  static getAllUsers = asyncHandler(async (req, res) => {
    const users = await UserService.findAll();
    res.json({ success: true, data: users });
  });
}
```

**Rules:**
- ✅ DO: Handle HTTP concerns only
- ✅ DO: Validate request format
- ✅ DO: Return appropriate status codes
- ❌ DON'T: Include business logic
- ❌ DON'T: Access database directly

---

### 2. **Services Layer** (`src/services/`)
**Spring Boot Equivalent:** `@Service`

**Responsibilities:**
- Implement business logic
- Orchestrate multiple repository calls
- Validate business rules
- Handle transactions
- Transform data between layers

**Example:**
```javascript
class UserService {
  static async create(userData) {
    // Business validation
    if (!userData.email) {
      throw new ValidationError('Email required');
    }
    
    // Check business rules
    const existing = await UserRepository.findByEmail(userData.email);
    if (existing) {
      throw new ConflictError('Email already exists');
    }
    
    return await UserRepository.create(userData);
  }
}
```

**Rules:**
- ✅ DO: Implement business logic
- ✅ DO: Validate business rules
- ✅ DO: Orchestrate repository calls
- ❌ DON'T: Handle HTTP concerns
- ❌ DON'T: Write SQL/database queries

---

### 3. **Repositories Layer** (`src/repositories/`)
**Spring Boot Equivalent:** `@Repository` / JPA Repository

**Responsibilities:**
- Execute database queries
- Handle CRUD operations
- Manage database connections
- Return raw data

**Example:**
```javascript
class UserRepository {
  static async findById(id) {
    // Database query
    return await db.query('SELECT * FROM users WHERE id = ?', [id]);
  }
  
  static async create(userData) {
    return await db.query('INSERT INTO users SET ?', [userData]);
  }
}
```

**Rules:**
- ✅ DO: Execute database operations
- ✅ DO: Handle database errors
- ✅ DO: Return raw data
- ❌ DON'T: Include business logic
- ❌ DON'T: Validate business rules

---

### 4. **Models Layer** (`src/models/`)
**Spring Boot Equivalent:** `@Entity`

**Responsibilities:**
- Define data structure
- Represent database entities
- Include basic validation
- Define relationships

**Example:**
```javascript
class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.createdAt = data.createdAt || new Date();
  }
  
  toJSON() {
    const { password, ...safe } = this;
    return safe;
  }
}
```

---

### 5. **DTOs** (`src/dto/`)
**Spring Boot Equivalent:** DTOs / Request/Response objects

**Responsibilities:**
- Transfer data between layers
- Shape API responses
- Filter sensitive data
- Map between entities and API contracts

**Example:**
```javascript
class UserDTO {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    // Exclude password, internal fields
  }
}
```

---

### 6. **Middleware** (`src/middleware/`)
**Spring Boot Equivalent:** `@ControllerAdvice`, Interceptors, Filters

**Responsibilities:**
- Global error handling
- Request/response logging
- Authentication/authorization
- Request validation

**Example:**
```javascript
// Error Handler (like @ControllerAdvice)
static errorHandler(err, req, res, next) {
  res.status(err.statusCode || 500).json({
    error: err.message
  });
}
```

---

### 7. **Routes** (`src/routes/`)
**Spring Boot Equivalent:** `@RequestMapping`, `@GetMapping`, etc.

**Responsibilities:**
- Define URL endpoints
- Map URLs to controllers
- Group related endpoints
- Apply middleware to routes

**Example:**
```javascript
router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
```

---

### 8. **Configuration** (`src/config/`)
**Spring Boot Equivalent:** `application.properties`, `@Configuration`

**Responsibilities:**
- Centralize configuration
- Manage environment variables
- Database configuration
- Third-party service setup

---

### 9. **Exceptions** (`src/exceptions/`)
**Spring Boot Equivalent:** Custom Exception classes

**Responsibilities:**
- Define custom error types
- Standardize error handling
- Provide meaningful error messages

---

### 10. **Utils** (`src/utils/`)
**Responsibilities:**
- Helper functions
- Common utilities
- Reusable code

---

## Request Flow

```
1. HTTP Request
   ↓
2. Routes (src/routes/)
   ↓
3. Middleware (validation, auth)
   ↓
4. Controller (src/controllers/)
   ↓
5. Service (src/services/)
   ↓
6. Repository (src/repositories/)
   ↓
7. Database
   ↓
8. Repository returns data
   ↓
9. Service processes data
   ↓
10. Controller formats response
    ↓
11. HTTP Response
```

## Example: Creating a New Feature

Let's say you want to add a "Posts" feature:

### Step 1: Create Model
```javascript
// src/models/post.model.js
class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.authorId = data.authorId;
  }
}
```

### Step 2: Create Repository
```javascript
// src/repositories/post.repository.js
class PostRepository {
  static async findAll() {
    // Database query
  }
  
  static async create(postData) {
    // Insert query
  }
}
```

### Step 3: Create Service
```javascript
// src/services/post.service.js
class PostService {
  static async create(postData) {
    // Validate business rules
    if (!postData.title) {
      throw new ValidationError('Title required');
    }
    
    return await PostRepository.create(postData);
  }
}
```

### Step 4: Create Controller
```javascript
// src/controllers/post.controller.js
class PostController {
  static createPost = asyncHandler(async (req, res) => {
    const post = await PostService.create(req.body);
    res.status(201).json({ success: true, data: post });
  });
}
```

### Step 5: Create Routes
```javascript
// src/routes/post.routes.js
router.post('/', PostController.createPost);
```

### Step 6: Register Routes
```javascript
// src/routes/index.js
router.use('/posts', postRoutes);
```

---

## Best Practices

### ✅ DO
- Keep layers separated
- Use dependency injection
- Handle errors properly
- Use DTOs for API responses
- Validate at appropriate layers
- Use async/await consistently
- Follow naming conventions

### ❌ DON'T
- Mix layer responsibilities
- Put business logic in controllers
- Access database from controllers
- Expose sensitive data in responses
- Ignore error handling
- Use callbacks (use async/await)

---

## Testing Strategy

```
Unit Tests:
├── Services (business logic)
├── Repositories (database operations)
└── Utils (helper functions)

Integration Tests:
├── Controllers (API endpoints)
└── Routes (full request flow)

E2E Tests:
└── Complete user flows
```

---

**Remember:** Each layer has a specific responsibility. Keep them separated for maintainability, testability, and scalability!
