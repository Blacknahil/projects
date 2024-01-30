const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    conversationId: { 
        type: String, 
        unique: true, 
        required: true 
    },
    participants: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }],
    isGroupChat: { 
        type: Boolean, 
        default: false 
    },
    groupName: {
         type: String 
    }, 
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

const conversation = mongoose.model('conversation', conversationSchema);
module.exports = conversation;