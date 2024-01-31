const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number, 
        required: true
    },
    comment: {
        type: String, 
    
    },
    reviewer: {
        type: Schema.Types.ObjectId, 
        ref: "User" ,
        // required: "true"
    },
        reviewedTutor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },    
});

reviewSchema.virtual("url").get(function (){
    return `/user/review/${this._id}`;
});

module.exports = mongoose.model("review", reviewSchema);
