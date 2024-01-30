const express = require('express');
const router = express.Router();

const { 
    getGroupMessage, 
    sendMessage, 
    getGroupMessagesList, 
    getPrivateMessagesList, 
    getPrivateMessage 
} = require("../controllers/messagesController.js");


router.get('/group/:messageId', getGroupMessage);

router.post('/send', sendMessage);

router.get('/groupList/:groupId', getGroupMessagesList);

router.get('/privateList/:userId/:otherUserId', getPrivateMessagesList);

router.get('/private/:messageId', getPrivateMessage);

module.exports = router;
