/* eslint-disable @typescript-eslint/no-require-imports */
const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://root:root@cluster0.9laow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;