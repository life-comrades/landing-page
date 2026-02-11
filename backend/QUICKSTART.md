# Quick Start Guide

## 🚀 Adding a New Resource (e.g., "Posts")

Follow these steps to add a new resource to your backend:

---

## Step 1: Create the Model (Entity)

**File:** `src/models/post.model.js`

```javascript
class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.authorId = data.authorId;
    this.published = data.published || false;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  static validate(data) {
    const errors = [];
    
    if (!data.title || data.title.trim().length < 3) {
      errors.push('Title must be at least 3 characters');
    }
    
    if (!data.content) {
      errors.push('Content is required');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

module.exports = Post;
```

---

## Step 2: Create the Repository (Data Access)

**File:** `src/repositories/post.repository.js`

```javascript
class PostRepository {
  static async findAll(limit = 10, offset = 0) {
    // TODO: Replace with actual database query
    // Example: return await db.query('SELECT * FROM posts LIMIT ? OFFSET ?', [limit, offset]);
    return [];
  }

  static async findById(id) {
    // TODO: Replace with actual database query
    return null;
  }

  static async create(postData) {
    // TODO: Replace with actual database insert
    return {
      id: Date.now(),
      ...postData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  static async update(id, postData) {
    // TODO: Replace with actual database update
    return {
      id,
      ...postData,
      updatedAt: new Date(),
    };
  }

  static async delete(id) {
    // TODO: Replace with actual database delete
    return true;
  }

  static async findByAuthor(authorId) {
    // TODO: Replace with actual database query
    return [];
  }
}

module.exports = PostRepository;
```

---

## Step 3: Create the Service (Business Logic)

**File:** `src/services/post.service.js`

```javascript
const PostRepository = require('../repositories/post.repository');
const { NotFoundError, ValidationError } = require('../exceptions/customExceptions');

class PostService {
  static async findAll(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    return await PostRepository.findAll(limit, offset);
  }

  static async findById(id) {
    const post = await PostRepository.findById(id);
    if (!post) {
      throw new NotFoundError(`Post with ID ${id} not found`);
    }
    return post;
  }

  static async create(postData) {
    // Validate required fields
    if (!postData.title || !postData.content) {
      throw new ValidationError('Title and content are required');
    }

    // Additional business logic
    if (postData.title.length < 3) {
      throw new ValidationError('Title must be at least 3 characters');
    }

    return await PostRepository.create(postData);
  }

  static async update(id, postData) {
    const post = await PostRepository.findById(id);
    if (!post) {
      throw new NotFoundError(`Post with ID ${id} not found`);
    }

    return await PostRepository.update(id, postData);
  }

  static async delete(id) {
    const post = await PostRepository.findById(id);
    if (!post) {
      throw new NotFoundError(`Post with ID ${id} not found`);
    }

    return await PostRepository.delete(id);
  }

  static async findByAuthor(authorId) {
    return await PostRepository.findByAuthor(authorId);
  }
}

module.exports = PostService;
```

---

## Step 4: Create the Controller (HTTP Handler)

**File:** `src/controllers/post.controller.js`

```javascript
const PostService = require('../services/post.service');
const { asyncHandler } = require('../middleware/errorHandler');

class PostController {
  /**
   * Get all posts
   * @route GET /api/posts
   */
  static getAllPosts = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const posts = await PostService.findAll(page, limit);
    
    res.json({
      success: true,
      data: posts,
      message: 'Posts retrieved successfully',
    });
  });

  /**
   * Get post by ID
   * @route GET /api/posts/:id
   */
  static getPostById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const post = await PostService.findById(id);
    
    res.json({
      success: true,
      data: post,
      message: 'Post retrieved successfully',
    });
  });

  /**
   * Create new post
   * @route POST /api/posts
   */
  static createPost = asyncHandler(async (req, res) => {
    const postData = req.body;
    const post = await PostService.create(postData);
    
    res.status(201).json({
      success: true,
      data: post,
      message: 'Post created successfully',
    });
  });

  /**
   * Update post
   * @route PUT /api/posts/:id
   */
  static updatePost = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const postData = req.body;
    const post = await PostService.update(id, postData);
    
    res.json({
      success: true,
      data: post,
      message: 'Post updated successfully',
    });
  });

  /**
   * Delete post
   * @route DELETE /api/posts/:id
   */
  static deletePost = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await PostService.delete(id);
    
    res.json({
      success: true,
      message: 'Post deleted successfully',
    });
  });
}

module.exports = PostController;
```

---

## Step 5: Create Routes

**File:** `src/routes/post.routes.js`

```javascript
const express = require('express');
const PostController = require('../controllers/post.controller');

const router = express.Router();

// GET all posts
router.get('/', PostController.getAllPosts);

// GET post by ID
router.get('/:id', PostController.getPostById);

// CREATE new post
router.post('/', PostController.createPost);

// UPDATE post
router.put('/:id', PostController.updatePost);

// DELETE post
router.delete('/:id', PostController.deletePost);

module.exports = router;
```

---

## Step 6: Register Routes

**File:** `src/routes/index.js`

Add this line:

```javascript
const postRoutes = require('./post.routes');

// ... existing code ...

router.use('/posts', postRoutes);
```

---

## Step 7: (Optional) Create DTOs

**File:** `src/dto/post.dto.js`

```javascript
class PostDTO {
  constructor(post) {
    this.id = post.id;
    this.title = post.title;
    this.content = post.content;
    this.published = post.published;
    this.createdAt = post.createdAt;
  }

  static fromEntity(post) {
    return new PostDTO(post);
  }

  static fromEntityList(posts) {
    return posts.map(post => new PostDTO(post));
  }
}

class CreatePostDTO {
  constructor(data) {
    this.title = data.title;
    this.content = data.content;
    this.authorId = data.authorId;
    this.published = data.published || false;
  }
}

module.exports = {
  PostDTO,
  CreatePostDTO,
};
```

---

## ✅ Testing Your New Resource

1. **Start the server:**
```bash
npm run dev
```

2. **Test with curl or Postman:**

```bash
# Get all posts
curl http://localhost:5000/api/posts

# Get post by ID
curl http://localhost:5000/api/posts/1

# Create a post
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"My Post","content":"Post content","authorId":1}'

# Update a post
curl -X PUT http://localhost:5000/api/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title"}'

# Delete a post
curl -X DELETE http://localhost:5000/api/posts/1
```

---

## 📋 Checklist

When adding a new resource, make sure you:

- [ ] Create the Model (`src/models/`)
- [ ] Create the Repository (`src/repositories/`)
- [ ] Create the Service (`src/services/`)
- [ ] Create the Controller (`src/controllers/`)
- [ ] Create the Routes (`src/routes/`)
- [ ] Register routes in `src/routes/index.js`
- [ ] (Optional) Create DTOs (`src/dto/`)
- [ ] Test all endpoints
- [ ] Add validation
- [ ] Handle errors properly

---

## 🎯 Common Patterns

### Pagination
```javascript
const { page = 1, limit = 10 } = req.query;
const offset = (page - 1) * limit;
```

### Error Handling
```javascript
if (!resource) {
  throw new NotFoundError('Resource not found');
}
```

### Validation
```javascript
if (!data.field) {
  throw new ValidationError('Field is required');
}
```

### Response Format
```javascript
res.json({
  success: true,
  data: result,
  message: 'Operation successful',
});
```

---

**That's it! You now have a fully functional REST API endpoint following Spring Boot patterns! 🎉**
