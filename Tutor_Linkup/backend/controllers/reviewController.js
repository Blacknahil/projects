const review = require("../models/review.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const rateUser = ((req, res) => {
    res.send('implement this function where users edit their own profile')
})

const commentOnUser = ((req, res) => {
    res.send('implement this function where the user leaves a comment with their rating')
})

const displayReviewPage = ((req, res) => {
    res.send('implement this function where review page is rendered')
})

module.exports = {
    rateUser,
    commentOnUser,
    displayReviewPage
}