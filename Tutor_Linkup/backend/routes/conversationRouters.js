const conversation = require("../models/conversation.js");
const express = require('express');
const router = express.Router();

const { getPrivateConversationsList, getGroupConversationsList, createConversation, getConversation } = require("../controllers/conversationController.js");

// base route /messages/conversation

router.get('/getPrivateCnvList', getPrivateConversationsList);
router.get('getGroupCnvList', getGroupConversationsList);
router.post('/create', createConversation);
router.get('/get/:id', getConversation);

module.exports = router;