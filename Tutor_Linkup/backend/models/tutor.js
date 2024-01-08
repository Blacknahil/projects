const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = require('user');

const tutorSchema = new Schema({
    availability: {
        type: String
    },
    qualifications: {
        type: String,

    },
    volunteerStatus: {
        type: String,
        enum: ['volunteer', 'paid', 'both'],

    },
    gender: {
        type: String,
        enum: ['male', 'female'],
    },
    paymentRange: {
        type: String,
    },
    contanctInformation: {
        type: String,

    },
    experience: {
        type: String,
        enum: ['< 1 year', '1-3 years', '3-7 years', '7+ years'],

    },
    subjectsOffered: {
        type: String,
        enum: ['Math', 'English', 'Physics', 'Chemistry', 'Biology', 'General Science', 'SAT', 'History', 'Geography'],
    }
})

const tutor = user.discriminator('tutor', tutorSchema);
module.exports = tutor;