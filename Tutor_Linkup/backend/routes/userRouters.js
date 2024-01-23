const user = require("../models/user.js");
const express = require('express');
const router = express.Router();

const {viewProfile, editProfile, deleteUser, createUser} = require('../controllers/userController.js');

// base route /user

router.get('/view/:id', viewProfile);
router.put('/edit/:id', editProfile);
router.delete('/delete/:id', deleteUser);
router.post('/create',createUser)

module.exports = router;