import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDb", conn.connection.host);
  } catch (error) {
    console.log("Failed to connect to MongoDb ", error.message);
  }
};
