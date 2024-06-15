import mongoose from "mongoose";
import { MONGO_DB_URI } from "./env.js";

const connectDB = async () => {
   try {
      await mongoose.connect(MONGO_DB_URI)
      console.log('Connected to MongoDB');
   } catch (error) {
      console.log('Error while connecting to MongoDB:', error.message);
   }
}

export default connectDB;