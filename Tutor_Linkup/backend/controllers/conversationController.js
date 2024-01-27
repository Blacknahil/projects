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

/**createConversation: This function creates a new conversation record in the database. The participants, isGroup, and name fields are assumed to be part of your conversation model.

getConversation: Retrieves a specific conversation by its ID. This function assumes that each conversation has a unique ID.

getPrivateConversationsList: Lists all private (one-on-one) conversations for a specific user.

getGroupConversationsList: Lists all group conversations that a user is part of.

Error Handling and Responses: The functions return appropriate HTTP status codes and responses based on the outcome of the database operations.

Database Operations: These implementations assume the use of a MongoDB-like database with methods such as create, findById, and find. You'll need to adjust these based on your actual database and ORM/ODM (like Mongoose).

Security and Authentication: In a real-world application, you'd also need to ensure that these endpoints are protected and can only be accessed by authenticated users. This typically involves middleware for authentication and authorization.

Validation: Input validation is crucial for security and data integrity but is not explicitly included in this implementation. Make sure to validate and sanitize inputs as per your application's requirements. */