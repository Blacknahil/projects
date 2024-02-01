const user = require("../models/user.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");
const express = require("express");



// Function to send verification email
const sendVerificationEmail = async (userId, userEmail) => {
    const secretKey = 'YourSecretKey'; // Replace with your secret key for JWT
    const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
  
    // Create a nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // Replace with your email address
        pass: 'your-email-password', // Replace with your email password
      },
    });
  
    // Email options
    const mailOptions = {
      from: 'your-email@gmail.com', // Replace with your email address
      to: userEmail,
      subject: 'Email Verification',
      text: `Click the following link to verify your email: http://localhost:4078/auth/verify-email?token=${token}`,
    };
  
    // Send the email
    await transporter.sendMail(mailOptions);
  };



const signUp = async (req, res, next) => {
    try {
        const { username, email, password, role } = req.body;

        // Check if username and email are provided
        if (!username || !email) {
            return res.status(400).json({ message: "Username and email are required" });
        }

        // Check if the user already exists
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Create a new user
        const newUser = await user.create({ username, email, password, role });

        // Return the newly created user
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        // Handle any errors during user creation
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
        return res.status(401).json({ message: "Invalid email" });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: existingUser._id }, 'YourSecretKey', { expiresIn: '1h' }); // Generate JWT token
    existingUser.password = undefined; // Remove password from user object
    ;
    return res.json({user:existingUser,token});
});

const changePassword = asyncHandler(async (req, res) => {
    const { userId, oldPassword, newPassword } = req.body;
    const existingUser = await user.findById(userId);
    if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(oldPassword, existingUser.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Old password is incorrect" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    existingUser.password = hashedPassword;
    await existingUser.save();
    res.json({ message: "Password changed successfully" });
});

const resetPassword = asyncHandler(async (req, res) => {
    const { userId, newPassword } = req.body; // Assumes identity has been verified, e.g., via a token from an email
    const existingUser = await user.findById(userId);
    if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    existingUser.password = hashedPassword;
    await existingUser.save();
    res.json({ message: "Password reset successfully" });
});

const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
    }
    // Logic to send a password reset email goes here
    // This typically includes generating a token and sending it via email
    res.json({ message: "Password reset email sent (if user exists)" });
});

module.exports = {
    signUp,
    login,
    changePassword,
    resetPassword,
    forgotPassword
};

