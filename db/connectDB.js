import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    return db;
  } catch (error) {
    console.log(error.message);
  }
};
