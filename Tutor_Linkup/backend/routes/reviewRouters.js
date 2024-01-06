const express = require('express');
const router = express.Router();
const Review = require("../models/review.js");

const {
    getReviews,
    displayReviewPage,
    getRating,
    reviewUser
} = require("../controllers/reviewController.js");

// Route to handle creating a new review
// Endpoint: /review/rate
router.post('/rate', reviewUser);

// Route to get all reviews
// Endpoint: /review/reviews
router.get('/reviews', getReviews);

// Route to display the review page
// Endpoint: /review/reviewPage
router.get('/reviewPage', displayReviewPage);

// Route to get the average rating
// Endpoint: /review/rating
router.get('/rating', getRating);

module.exports = router;
