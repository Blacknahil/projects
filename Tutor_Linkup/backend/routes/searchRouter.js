const user = require("../models/user.js");
const express = require('express');
const router = express.Router();

const {} = require('');
const { searchUser, filterByGender, filterByRole, filterByVolunteerStatus } = require("../controllers/searchController.js");

// base route /search

router.get('/:id', searchUser);
router.get('/', filterByGender);
router.get('/', filterByRole);
router.get('/', filterByVolunteerStatus);


module.exports = router;