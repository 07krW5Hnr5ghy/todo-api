const express = require('express');
const {updateTodo, createTodo,getTodos,getTodo,deleteTodo} = require('../controllers/todoController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authenticate);

// Todo routes
router.post('/todos', createTodo);
router.get('/todos', getTodos);
router.get('/todos/:id', getTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;