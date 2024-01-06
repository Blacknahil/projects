const mongoose = require("mongoose");
const db =
  "mongodb+srv://Tutor_Linkup1:3fE2Ny4oWf9pwPSh@cluster0.qhs3xy1.mongodb.net/?retryWrites=true&w=majority"

mongoose.set("strictQuery", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;