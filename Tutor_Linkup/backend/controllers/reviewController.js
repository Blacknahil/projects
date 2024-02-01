const Review = require("../models/review.js");
const asyncHandler = require("express-async-handler");

const reviewUser = asyncHandler(async (req, res) => {
    const { rating, comment} = req.body;

    if (isNaN(rating) || rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Rating must be between 1 and 5!' });
    }

    const newReview = new Review({ rating, comment});
    const savedReview = await newReview.save();

    res.json(savedReview);
});

const getRating = asyncHandler(async (req, res) => {
    const allRatings = await Review.find({}, "rating");
    const totalReviews = await Review.countDocuments();
    let Rating = 0;

    allRatings.forEach((review) => {
        Rating += review.rating;
    });

    const finalRating = Math.round(Rating / totalReviews);
    res.json(finalRating);
});

const getReviews = asyncHandler(async (req, res) => {
    const allReviews = await Review.find({}, "comment");
    res.json(allReviews);
});

const displayReviewPage = asyncHandler(async (req, res) => {
    res.render('review page'); // Ensure your application is set up for rendering views
});

module.exports = {
    reviewUser,
    getReviews,
    displayReviewPage,
    getRating
};
