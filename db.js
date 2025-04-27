// db.js
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
        tls: true,
        tlsAllowInvalidCertificates: true, // Bypasses SSL validation
      });
    console.log('MongoDB Connected!');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    process.exit(1); // Exit if connection fails
  }
};

module.exports = connectDB;