const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect("mongodb://127.0.0.1:27017/next-cms");
      console.log("Connect To DB Successfully :))");
    }
  } catch (err) {
    console.log("DataBase Connection Error =>", err);
  }
};

export default connectToDB;
