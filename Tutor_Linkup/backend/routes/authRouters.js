const user = require("../models/user.js");
const express = require('express');
const router = express.Router();

const { signUp, login, resetPassword, changePassword, forgotPassword } = require("../controllers/authControllers.js");


// base route /signup

router.get('/:id', signUp);
router.get('/login/:id', login);
router.put('/reset/:id', resetPassword);
router.put('/change/:id', changePassword);
router.get('/forgot/:id', forgotPassword);

module.exports = router;