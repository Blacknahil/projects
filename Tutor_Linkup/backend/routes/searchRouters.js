const search = require("../models/search.js");
const express = require('express');
const router = express.Router();

const { searchUser, searchPost } = require("../controllers/searchController.js");

// base route /search

router.get('/finduser', searchUser);
router.get('/findpost', searchPost);



module.exports = router;