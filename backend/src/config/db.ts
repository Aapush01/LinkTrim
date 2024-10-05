import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.MongoDB_URL}`);
    console.log(
      "Database connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default connectDB;
