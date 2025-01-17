const Joi = require('joi');

// Validation schema for user registration
const registrationSchema = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
        'string.empty': 'Name is required.',
        'string.min': 'Name must be at least 3 characters.',
        'string.max': 'Name must not exceed 50 characters.',
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required.',
        'string.email': 'Invalid email format.',
    }),
    password: Joi.string().min(6).max(50).required().messages({
        'string.empty': 'Password is required.',
        'string.min': 'Password must be at least 6 characters.',
        'string.max': 'Password must not exceed 50 characters.',
    }),
});

// Validation schema for user login
const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required.',
        'string.email': 'Invalid email format.',
    }),
    password: Joi.string().required().messages({
        'string.empty': 'Password is required.',
    }),
});

module.exports = {
    registrationSchema,
    loginSchema,
};
