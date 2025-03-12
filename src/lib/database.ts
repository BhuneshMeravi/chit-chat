const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(`mongodb connected ${conn.connection.host}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`error: ${error.message}`);
    } else {
      console.log(`error: ${String(error)}`);
    }
    process.exit();
  }
};

module.exports = connectDB;
