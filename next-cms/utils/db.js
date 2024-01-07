import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connection[0].readyState) {
      return false;
    } else {
      await mongoose.connect("mongodb://localhost:27017/next-cms");
      console.log("Database connected successfully!");
    }
  } catch (error) {
    console.log("Database Connection error =>", error);
  }
};
