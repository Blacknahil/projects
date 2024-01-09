const User = require("../models/user.js");
const asyncHandler = require("express-async-handler");
const express = require("express");



const editProfile = asyncHandler(async (req, res) => {
    const userId = req.params.id; 
    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    

    if (req.body && (req.body.username || req.body.email)) {
        console.log("Yes there is input");
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
    }

    await user.save();

    // Log the user object after the update

    res.json({ message: "User profile updated successfully", user });
});



const viewProfile = asyncHandler(async (req, res) => {
    const userId = req.params.id;

    // Get the user by ObjectId
    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Return user profile details
    res.json({ user });
});


const deleteUser=async (req, res, next)=>{

    const user= await User.findById(req.params.id);
    

   await User.findByIdAndDelete(req.params.id);
   res.status(200).send("deleted.")
};

const createUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        // Check if username and email are provided
        if (!username || !email) {
            return res.status(400).json({ message: "Username and email are required" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Create a new user
        const newUser = await User.create({ username, email, password });

        // Return the newly created user
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        // Handle any errors during user creation
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};




module.exports = {
    editProfile,
    viewProfile,
    deleteUser,
    createUser
}


