const search = require("../models/search.js");
const express = require('express');
const router = express.Router();

const { searchUser, filterByGender, filterByRole, filterByVolunteerStatus } = require("../controllers/searchController.js");

// base route /search

router.get('/user/:id', searchUser);
router.get('/filterGender', filterByGender);
router.get('/filterRole', filterByRole);
router.get('/filterVS', filterByVolunteerStatus);


module.exports = router;