const express = require('express');
const {
    register,
    login
} = require('../controllers/authController');
const validate = require('../middlewares/validateMiddleware');
const {registrationSchema,loginSchema} = require('../validation/authValidation');

const router = express.Router();

router.post('/register',validate(registrationSchema),register);
router.post('/login',validate(loginSchema),login);

module.exports = router;