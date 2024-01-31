const OTP = require('../models/otp.js');
const speakeasy = require('speakeasy');

// Function to generate and save OTP for a user
const generateOTP = async (userId) => {
    try {
      const secret = speakeasy.generateSecret();
      const otpData = new OTP({
        userId,
        otpSecret: secret.base32,
        otpValidUntil: new Date(Date.now() + 5 * 60 * 1000), // OTP valid for 5 minutes
      });
      await otpData.save();
      return secret.otpauth_url;
    } catch (error) {
      console.error('Error generating OTP:', error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  };
  
  
  

// Function to verify OTP for a user
const verifyOTP = async (userId, userOTP) => {
  const otpData = await OTP.findOne({ userId });
  if (!otpData) {
    return false; // No OTP data found for the user
  }

  const verificationResult = speakeasy.totp.verify({
    secret: otpData.otpSecret,
    encoding: 'base32',
    token: userOTP,
    window: 1, // Allow one-time code before or after the current time
  });

  if (verificationResult && otpData.otpValidUntil > new Date()) {
    return true; // OTP is valid
  } else {
    return false; // OTP is invalid or expired
  }
};

module.exports = { generateOTP, verifyOTP };
