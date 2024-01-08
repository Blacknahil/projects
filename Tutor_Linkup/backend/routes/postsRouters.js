const posts = require("../models/posts.js");
const express = require('express');
const router = express.Router();

const { displayCreatePostPage, createPost, displayPosts, displaySinglePost } = require("../controllers/postsController.js");

// base route /posts

router.get('/createPost', displayCreatePostPage);
router.post('/createPost/:id', createPost);
router.get('/createPost', displayPosts);
router.get('/createPost/:id', displaySinglePost);


module.exports = router;