const conversation = require("../models/conversation.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const createConversation = ((req, res) => {
    res.send('implement this function where users edit their own profile')
})

const getConversation = ((req, res) => {
    res.send('implement this function where the user views other users profile')
})

const getPrivateConversationsList = ((req, res) => {
    res.send('implement this function where the user views other users profile')
})

const getGroupConversationsList= ((req, res) => {
    res.send('implement this function where the user views other users profile')
})

module.exports = {
   createConversation,
   getConversation,
   getPrivateConversationsList,
   getGroupConversationsList
}