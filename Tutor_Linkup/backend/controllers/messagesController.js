const messages = require("../models/messages.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const sendMessage = asyncHandler(async (req, res) => {
    const { from, to, content, isGroup } = req.body;
    const newMessage = await messages.create({ from, to, content, isGroup });
    res.status(201).json(newMessage);
});

const getGroupMessage = asyncHandler(async (req, res) => {
    const { messageId } = req.params;
    const message = await messages.findOne({ _id: messageId, isGroup: true });
    if (!message) {
        res.status(404).send('Message not found');
        return;
    }
    res.json(message);
});

const getPrivateMessage = asyncHandler(async (req, res) => {
    const { messageId } = req.params;
    const message = await messages.findOne({ _id: messageId, isGroup: false });
    if (!message) {
        res.status(404).send('Message not found');
        return;
    }
    res.json(message);
});

const getGroupMessagesList = asyncHandler(async (req, res) => {
    const { groupId } = req.params;
    const messagesList = await messages.find({ to: groupId, isGroup: true });
    res.json(messagesList);
});

const getPrivateMessagesList = asyncHandler(async (req, res) => {
    const { userId, otherUserId } = req.params;
    const messagesList = await messages.find({
        $or: [
            { from: userId, to: otherUserId, isGroup: false },
            { from: otherUserId, to: userId, isGroup: false }
        ]
    });
    res.json(messagesList);
});

module.exports = {
    sendMessage,
    getGroupMessage,
    getPrivateMessage,
    getGroupMessagesList,
    getPrivateMessagesList,
};


/**Database Model Assumptions: I assumed that the messages model has methods like 
 * create, findOne, and find. 
 * These are common in ORMs like Mongoose. You'll need to adjust these based on your actual database model and schema.

Route Parameters and Body: The functions assume that necessary data 
(like messageId, groupId, userId, etc.) 
are passed through the request parameters (req.params) or 
the request body (req.body). 
You may need to adjust these depending on how your API is designed to receive data.

Error Handling: The use of asyncHandler helps in forwarding errors to your error-handling middleware in Express. 
Make sure you have error-handling middleware set up in your application.

*/