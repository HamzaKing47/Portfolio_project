import mongoose from "mongoose";
import "dotenv/config";

const URL = process.env.DATABASE_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected");
  } catch (error) {
    console.log("Database error: ", error);
  }
};

export default connectDb;
