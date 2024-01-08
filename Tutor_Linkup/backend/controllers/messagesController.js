const messages = require("../models/messages.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const sendMessage = ((req, res) => {
    res.send('implement this function')
})

const getGroupMessage = ((req, res) => {
    res.send('implement this function')
})

const getPrivateMessage = ((req, res) => {
    res.send('implement this function')
})

// const getGroupMessagesList = ((req, res) => {
//     res.send('implement this functio')
// })

// const getPrivateMessagesList = ((req, res) => {
//     res.send('implement this functio')
// })

module.exports = {
    sendMessage,
    getGroupMessage,
    getPrivateMessage,
}