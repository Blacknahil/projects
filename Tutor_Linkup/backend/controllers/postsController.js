const posts = require("../models/posts.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const displayCreatePostPage = ((req, res) => {
    res.send('implement this function where the create post page is rendered')
});

const createPost = ((req, res) => {
    res.send('implement this function')
});

const displayPosts = ((req, res) => {
    res.send('implement this function where all posts are rendered')
})

const displaySinglePost = ((req, res) => {
    res.send('implement this function where a single post is rendered')
})



module.exports = {
    displayCreatePostPage,
    createPost,
    displayPosts,
    displaySinglePost
}