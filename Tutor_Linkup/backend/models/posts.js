const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    description: {
        type: String,
    },
    fieldOfMentorship: {
        type: String,
        enum: ['Art', 'Music', 'Coding', 'Fashion Design', 'Literature', 'Agriculture', 'Public Speaking' ],

    },
    subjectsOffered: {
        type: String,
        enum: ['Math', 'English', 'Physics', 'Chemistry', 'Biology', 'General Science', 'SAT', 'History', 'Geography'],
    
    },
    duration: {
        type: String,
    },
    paymentRate: {
        type: String,

    },
    genderPreference: {
        type: String,
        enum: ['male', 'female', 'none'],
    },
    timePreference: {
        type: String,
    },
    location: {
        type: String,
    }



});

const posts = mongoose.model("posts", postSchema);
module.exports = posts