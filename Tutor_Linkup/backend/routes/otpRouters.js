const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

// Route to generate OTP for a user
router.post('/generate', async (req, res) => {
  const { userId } = req.body;
  try {
    const otpAuthUrl = await otpController.generateOTP(userId);
    res.json({ otpAuthUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to verify OTP for a user
router.post('/verify', async (req, res) => {
  const { userId, userOTP } = req.body;
  try {
    const isOTPValid = await otpController.verifyOTP(userId, userOTP);
    res.json({ isOTPValid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
