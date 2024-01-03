const review = require("../models/review.js");
const express = require('express');
const router = express.Router();

const { rateUser, commentOnUser, displayReviewPage } = require("../controllers/reviewController.js");

// base route /user/:id/review

router.post('/', rateUser);
router.post('/', commentOnUser);
router.get('/', displayReviewPage)

module.exports = router;