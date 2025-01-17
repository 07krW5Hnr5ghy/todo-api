const express = require('express');
const {
    updateTodo, 
    createTodo,
    getTodos,
    getTodo,
    deleteTodo
} = require('../controllers/todoController');
const authenticate = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validateMiddleware');
const {todoSchema} = require('../validation/todoValidation');

const router = express.Router();

router.use(authenticate);

// Todo routes
router.post('/todos',validate(todoSchema), createTodo);
router.get('/todos', getTodos);
router.get('/todos/:id', getTodo);
router.put('/todos/:id',validate(todoSchema), updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;