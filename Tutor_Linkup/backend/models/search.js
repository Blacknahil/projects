const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    searchParameter: {
        type: String,
    },
    filterRole: {
        type: String,
        enum: ['mentor', 'tutor']
    },
    filterVolunteerStatus: {
        type: String,
        enum: ['volunteer', 'paid'],

    },
    filterGender: {
        type: String,
        enum: ['female', 'male']
    }
});

const search = mongoose.model('search', searchSchema);
module.exports = search;