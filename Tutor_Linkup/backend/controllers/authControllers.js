const user = require("../models/user.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");
const express = require("express");

const signUp = asyncHandler(async (req, res) => {
    const { email, password, username,role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password
    const newUser = await user.create({ email, username, password: hashedPassword ,role});
    res.status(201).json(newUser);
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ userId: existingUser._id }, 'YourSecretKey', { expiresIn: '1h' }); // Generate JWT token
    res.json({ token });
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

