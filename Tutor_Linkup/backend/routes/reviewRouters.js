const review = require("../models/review.js");
const express = require('express');
const router = express.Router();

const { rateUser, commentOnUser, displayReviewPage } = require("../controllers/reviewController.js");

// base route /review

router.post('/rate', rateUser);
router.post('/comment', commentOnUser);
router.get('/reviewPage', displayReviewPage)

module.exports = router;