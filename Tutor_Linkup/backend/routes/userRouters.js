const user = require("../models/user.js");
const express = require('express');
const router = express.Router();

const {viewProfile, editProfile} = require('../controllers/userController.js');

// base route /user

router.get('/view/:id', viewProfile);
router.put('/edit/:id', editProfile);

module.exports = router;