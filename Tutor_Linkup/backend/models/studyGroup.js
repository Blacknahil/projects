const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studyGroupSchema = new Schema({
    sender: { 
        type: Schema.Types.ObjectId, 
        ref: 'user', 
        required: true 
    },
    conversationId: { 
        type: String,
        ref: 'conversation', 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    },
});

const studyGroup = mongoose.model('studyGroup', studyGroupSchema);
module.exports = studyGroup;
