
const mongoose = require('mongoose');
require('dotenv').config();


const db = "mongodb+srv://yordanos:yordi@cluster0.am0h3ya.mongodb.net/";

// Log the MongoDB URI for debugging purposes
console.log("MongoDB URI:", db);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
