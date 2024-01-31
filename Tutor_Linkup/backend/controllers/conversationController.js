const conversation = require("../models/conversation.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const createConversation = asyncHandler(async (req, res) => {
    const { participants, isGroup, name } = req.body; // Assuming these fields are required for a conversation
    const newConversation = await conversation.create({ participants, isGroup, name });
    res.status(201).json(newConversation);
});

const getConversation = asyncHandler(async (req, res) => {
    const { conversationId } = req.params;
    const conv = await conversation.findById(conversationId);
    if (!conv) {
        return res.status(404).send('Conversation not found');
    }
    res.json(conv);
});

const getPrivateConversationsList = asyncHandler(async (req, res) => {
    const { userId } = req.params; // Assuming userId is passed as a parameter
    const privateConversations = await conversation.find({
        participants: { $in: [userId] },
        isGroup: false
    });
    res.json(privateConversations);
});

const getGroupConversationsList = asyncHandler(async (req, res) => {
    const { userId } = req.params; // Assuming userId is passed as a parameter
    const groupConversations = await conversation.find({
        participants: { $in: [userId] },
        isGroup: true
    });
    res.json(groupConversations);
});

module.exports = {
    createConversation,
    getConversation,
    getPrivateConversationsList,
    getGroupConversationsList
};

