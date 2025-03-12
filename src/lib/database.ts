import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {});
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

export default connectDB;
