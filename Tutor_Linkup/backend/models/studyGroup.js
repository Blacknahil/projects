const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studyGroupSchema = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
      },
      content: {
        type: String,
        required: true,
      },
      groupName: {
        type: String,
        // required: true,
      },
      members: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },
    });

const studyGroup = mongoose.model('studyGroup', studyGroupSchema);
module.exports = studyGroup;
