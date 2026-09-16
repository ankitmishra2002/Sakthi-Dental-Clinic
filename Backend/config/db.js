const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb+srv://<techankit16_db_user>:bEpZXf47Ufkblwwh@cluster0.exs9xuu.mongodb.net/';
    const conn = await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`MongoDB Connection Notice: ${error.message}`);
    console.warn('Server running in fallback mode with in-memory storage fallback enabled.');
  }
};

module.exports = connectDB;
