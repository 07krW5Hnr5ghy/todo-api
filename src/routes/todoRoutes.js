const express = require('express');
const {updateTodo} = require('../controllers/todoController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

router.put('/todos/:id',authenticate,updateTodo);

module.exports = router;