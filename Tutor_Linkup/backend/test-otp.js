// test-otp.js

const otpController = require('./controllers/otpController');

// Test OTP Generation
async function testOTPGeneration() {
  try {
    const userId = '65b8386edeb78642a11cf8ef'; // Replace with a valid user ID
    const otpAuthUrl = await otpController.generateOTP(userId);
    console.log('OTP Auth URL:', otpAuthUrl);
  } catch (error) {
    console.error('Error generating OTP:', error);
  }
}

// Test OTP Verification
async function testOTPVerification() {
  try {
    const userId = '65b8386edeb78642a11cf8ef'; // Replace with the same user ID used in generation
    const userOTP = '123456'; // Replace with the OTP you want to test
    const isOTPValid = await otpController.verifyOTP(userId, userOTP);
    console.log('Is OTP Valid?', isOTPValid);
  } catch (error) {
    console.error('Error verifying OTP:', error);
  }
}

// Run the tests
testOTPGeneration();
testOTPVerification();
