const mongoose = require('mongoose');

const ChatRoomSchema = new mongoose.Schema({
    name: String,
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
});

module.exports = mongoose.model('ChatRoom', ChatRoomSchema);
