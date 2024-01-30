const express = require('express');
const router = express.Router();

const {
    getPrivateConversationsList,
    getGroupConversationsList,
    createConversation,
    getConversation
} = require("../controllers/conversationController.js");




router.get('/private/:userId', getPrivateConversationsList);

router.get('/group/:userId', getGroupConversationsList);

router.post('/create', createConversation);

router.get('/get/:conversationId', getConversation);

module.exports = router;
