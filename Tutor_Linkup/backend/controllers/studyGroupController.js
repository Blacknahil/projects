const studyGroup = require("../models/studyGroup.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const createGroup = ((req, res) => {
    res.send('implement this function where users create a group')
})

const addGroupMember = ((req, res) => {
    res.send('implement this function where the user adds a group member')
})

const deleteGroup = ((req, res) => {
    res.send('implement this function where the user deletes the group')
})

const getGroup = ((req, res) => {
    res.send('implement this function where the particular group is displayed')
})

module.exports = {
    createGroup,
    addGroupMember,
    deleteGroup,
    getGroup
}