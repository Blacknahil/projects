const search = require("../models/search.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const searchUser = ((req, res) => {
    res.send('implement this function where users can search for other users using their username')
})

const filterByGender = ((req, res) => {
    res.send('implement this function')
})

const filterByRole = ((req, res) => {
    res.send('implement this function')
})

const filterByVolunteerStatus = ((req, res) => {
    res.send('implement this function')
})


module.exports = {
    searchUser,
    filterByGender,
    filterByRole,
    filterByVolunteerStatus
}