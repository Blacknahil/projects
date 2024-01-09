const Post = require("../models/posts.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const displayPosts = async (req, res) => {
    try {
      // Fetch posts from the database
      const posts = await Post.find();
     
  
      // Render the EJS file and pass the posts as data
      res.render('create-post', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  
 
  

const createPost = async (req, res) => {
  try {
    // Extract post data from the request body
    const postData = {
      description: req.body.description,
      fieldOfMentorship: req.body.fieldOfMentorship,
      subjectsOffered: req.body.subjectsOffered,
      duration: req.body.duration,
      paymentRate: req.body.paymentRate,
      genderPreference: req.body.genderPreference,
      timePreference: req.body.timePreference,
      location: req.body.location,
    };

    // Create a new post using the Post model
    const newPost = await Post.create(postData);

    // Send a success response
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};







const displaySinglePost = async (req, res) => {
    try {
      const postId = req.params.id;
  
      // Fetch the post from the database based on the post ID
      const post = await Post.findById(postId);
  
      if (!post) {
        // If the post is not found, return a 404 response
        return res.status(404).json({ message: "Post not found" });
      }
  
      // Render the EJS file for displaying a single post and pass the post as data
      res.render('single-post', { post });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  
  
  
  



module.exports = {
    
    createPost,
    displayPosts,
    displaySinglePost
}