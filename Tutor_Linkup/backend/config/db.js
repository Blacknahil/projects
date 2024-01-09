
const mongoose = require('mongoose');
require('dotenv').config();


const db = "mongodb+srv://Tutor_Linkup1:3fE2Ny4oWf9pwPSh@cluster0.qhs3xy1.mongodb.net/?retryWrites=true&w=majority";

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
