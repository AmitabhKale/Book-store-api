const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/booksDB";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected", conn.connection.host);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
