const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isGroup: {
        type: Boolean,
        default: false
    },
    read: {
        type: Boolean,
        default: false
    },
    conversationId: {
        type: Schema.Types.ObjectId,
        ref: 'Conversation'
    },
    messageType: {
        type: String,
        enum: ['text', 'image', 'video'],
        default: 'text'
    }
}, {
    timestamps: true // Automatically creates createdAt and updatedAt fields
});

// Indexes for faster queries
messageSchema.index({ from: 1, to: 1, conversationId: 1 });

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
