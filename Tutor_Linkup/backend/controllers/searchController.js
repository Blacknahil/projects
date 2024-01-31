const search = require("../models/search.js");
const asyncHandler = require("express-async-handler");
const express = require("express");
const User = require('../models/user');
const Post= require('../models/posts.js');

const searchUser = asyncHandler(async (req, res) => {
    const searchTerm = req.query.term;
    console.log(searchTerm);
    if (!searchTerm) {
        return res.status(400).json({ message: "Search term is required" });
    }

    // Use a MongoDB query to search for users with matching fields
    const users = await User.find({
        $or: [
            { username: { $regex: searchTerm, $options: "i" } }, // Case-insensitive username search
            { email: { $regex: searchTerm, $options: "i" } },    // Case-insensitive email search
            { address: { $regex: searchTerm, $options: "i" } },
            { role: { $regex: searchTerm, $options: "i" } },


            // Add more fields as needed
        ],
    });

    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
    }

    // Return the list of matching users
    res.json({ users });
});


const searchPost = asyncHandler(async (req, res) => {
    const searchTerm = req.query.term;
    console.log(searchTerm);
    if (!searchTerm) {
        return res.status(400).json({ message: "Search term is required" });
    }

    // Use a MongoDB query to search for users with matching fields
    const posts = await Post.find({
        $or: [
            { description: { $regex: searchTerm, $options: "i" } },
            // { fieldOfMentorship: { $regex: searchTerm, $options: "i" } },
            // { subjectsOffered: { $regex: searchTerm, $options: "i" } },
            // { duration: { $regex: searchTerm, $options: "i" } },
            // Add more fields as needed
        ],
    });

    if (!posts || posts.length === 0) {
        return res.status(404).json({ message: "No users found" });
    }

    // Return the list of matching users
    res.json({ posts });
});




module.exports = {
    searchUser,
    searchPost,
 
}