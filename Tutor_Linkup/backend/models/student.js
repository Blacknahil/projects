const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    shortBio: {
        type: String,
        maxLength: 80,
    },
    contactInfo: {
        type: String,
    }
});

const student = mongoose.model('student', studentSchema);
module.exports = student;