const user = require("../models/user.js");
const express = require('express');
const router = express.Router();

const {} = require('');

// base route /user

router.get('/:id', viewProfile);
router.put('/:id', editProfile);

module.exports = router;