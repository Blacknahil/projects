const posts = require("../models/posts.js");
const express = require('express');
const router = express.Router();

const {  createPost, displayPosts, displaySinglePost } = require("../controllers/postsController.js");

// base route /posts


router.post('/newPost', createPost);
router.get('/create-post', displayPosts);
router.get('/post/:id', displaySinglePost);


module.exports = router;