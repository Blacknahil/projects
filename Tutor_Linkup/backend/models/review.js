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
        ref: "tutor" 
    },
});

reviewSchema.virtual("url").get(function (){
    return `/user/review/${this._id}`;
});

module.exports = mongoose.model("review", reviewSchema);