/**
 * User DTO (Data Transfer Object)
 * Similar to Spring Boot's DTOs for request/response mapping
 */

class UserDTO {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.role = user.role;
        this.isActive = user.isActive;
        this.createdAt = user.createdAt;
    }

    static fromEntity(user) {
        return new UserDTO(user);
    }

    static fromEntityList(users) {
        return users.map(user => new UserDTO(user));
    }
}

class CreateUserDTO {
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.role = data.role || 'user';
    }
}

class UpdateUserDTO {
    constructor(data) {
        if (data.name !== undefined) this.name = data.name;
        if (data.email !== undefined) this.email = data.email;
        if (data.role !== undefined) this.role = data.role;
        if (data.isActive !== undefined) this.isActive = data.isActive;
    }
}

module.exports = {
    UserDTO,
    CreateUserDTO,
    UpdateUserDTO,
};
