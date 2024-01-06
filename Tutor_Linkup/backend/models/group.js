const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    tutor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    subject: {
        type: String,
        required: true
    },
    description: String,
    meetingTimes: [Date]
});

module.exports = mongoose.model('Group', groupSchema);
