const review = require("../models/review.js");
const express = require('express');
const router = express.Router();

const { getReviews, displayReviewPage, getRating, reviewUser } = require("../controllers/reviewController.js");

// base route /review

router.post('/rate', reviewUser);
router.get('/reviews', getReviews);
router.get('/reviewPage', displayReviewPage);
router.get('/rating', getRating);

module.exports = router;  