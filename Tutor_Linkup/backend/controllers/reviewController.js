const review = require("../models/review.js");
const asyncHandler = require("express-async-handler");
const express = require("express");
const bodyParser = require("body-parser");


// link the user id to ur functions!!!

const reviewUser = asyncHandler(async (req, res) => {
    const { rating, comment, reviewedTutor } = req.body;
    // const rating = req.body.rating;
    if (isNaN(rating) || rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Rating must be between 1 and 5!' });
    }

    const newReview = new review({ rating, comment, reviewedTutor });

    const savedReview = await newReview.save();
    res.json(savedReview); 
}); 
  

const getRating = async(req, res) => {
        const allRatings = await review.find({}, "rating");
        const totalReviews = await review.countDocuments();
        let Rating = 0;
        
        allRatings.forEach((review) => {
            Rating += review.rating;
          });
        
        const finalRating = Math.round(Rating/totalReviews);
        res.json(finalRating);

};

const getReviews = async(req, res) => {
    // res.send('implement this function where the user leaves a comment with their rating')
    const allReviews = await (review.find({}, "comment"));
    
    res.json(allReviews); 

}

const displayReviewPage = ((req, res) => {
    res.render('review page')
    // to be attached to front enders
})
 
module.exports = {
    reviewUser, 
    getReviews,
    displayReviewPage,
    getRating
}