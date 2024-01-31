const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
    },
    otpSecret: String,
    otpAttempts: {
      type: Number,
      default: 0,
    },
    otpValidUntil: Date,
  });
  
  const OTP = mongoose.model('OTP', otpSchema);
  
  module.exports = OTP;