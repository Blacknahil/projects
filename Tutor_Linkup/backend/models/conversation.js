const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    isGroupChat: {
        type: Boolean,
        default: false
    },
    groupName: {
        type: String,
        required: function () { return this.isGroupChat; } // groupName is required if it's a group chat
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message' // Assuming you have a Message model
    }],
    lastActivity: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true // Automatically creates createdAt and updatedAt fields
});

// Indexes for faster queries
conversationSchema.index({ participants: 1 });

// Method to add a participant
conversationSchema.methods.addParticipant = function (participantId) {
    if (!this.participants.includes(participantId)) {
        this.participants.push(participantId);
    }
};

// Method to remove a participant
conversationSchema.methods.removeParticipant = function (participantId) {
    this.participants = this.participants.filter(p => !p.equals(participantId));
};

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;
