const messages = require("../models/messages.js");
const express = require('express');
const router = express.Router();

const { getGroupMessage, sendMessage, getGroupMessagesList, getPrivateMessagesList, getPrivateMessage } = require("../controllers/messagesController.js");

// base route /user/messages

router.get('/getGroupMsg/:id', getGroupMessage);
router.post('/send/:id', sendMessage);
// router.get('/groupList/:id', getGroupMessagesList);
// router.get('/privateList/:id', getPrivateMessagesList);
router.get('/getPrivateMsg/:id', getPrivateMessage);



module.exports = router;