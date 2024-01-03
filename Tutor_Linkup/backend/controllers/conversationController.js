const user = require("../models/user.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const editProfile = ((req, res) => {
    res.send('implement this function where users edit their own profile')
})

const viewProfile = ((req, res) => {
    res.send('implement this function where the user views other users profile')
})

module.exports = {
    editProfile,
    viewProfile
}