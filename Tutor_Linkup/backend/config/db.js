const mongoose = require('mongoose');
require('dotenv').config();

// Replace with your local MongoDB URI
const db = "mongodb://localhost:27017/tutor";

// Log the MongoDB URI for debugging purposes
console.log("MongoDB URI:", db);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log(`MongoDB is Connected...on port${db}`);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
