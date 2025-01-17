const Joi = require('joi');

// Validation schema for creating/updating todos
const todoSchema = Joi.object({
    title: Joi.string().min(3).max(100).required().messages({
        'string.empty': 'Title is required.',
        'string.min': 'Title must be at least 3 characters.',
        'string.max': 'Title must not exceed 100 characters.',
    }),
    description: Joi.string().max(500).allow('').messages({
        'string.max': 'Description must not exceed 500 characters.',
    }),
    status: Joi.string().valid('pending', 'in-progress', 'completed').optional(),
});

module.exports = {
    todoSchema,
};
