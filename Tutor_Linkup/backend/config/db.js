
const mongoose = require('mongoose');
require('dotenv').config();


const db ="mongodb+srv://yordanos:1234@cluster1.isdg4lt.mongodb.net/?retryWrites=true&w=majority/";
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
