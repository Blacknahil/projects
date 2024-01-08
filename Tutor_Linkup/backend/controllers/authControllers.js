const user = require("../models/user.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const signUp = ((req, res) => {
    res.send('implement this function where users edit their own profile')
})

const login = ((req, res) => {
    res.send('implement this function where the user views other users profile')
})

const changePassword = ((req, res) => {
    res.send('implement this function where the user views other users profile')
})

const resetPassword = ((req, res) => {
    res.send('implement this function where the user views other users profile')
})

const forgotPassword = ((req, res) => {
    res.send('implement this function where the user views other users profile')
})

module.exports = {
    signUp,
    login,
    changePassword,
    resetPassword,
    forgotPassword
}