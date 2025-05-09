const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS for all origins (you can restrict it later)
app.use(cors());  // This should be before all routes

// Body parsing middleware
app.use(express.json());

  // Route setup for customers
  const customerRoutes = require('./routes/customers');
  app.use('/api/customers', customerRoutes);

  // Route setup for inventory
  const inventoryRoutes = require('./routes/inventory');
  app.use('/api/inventory', inventoryRoutes);

  // Route setup for categories
  const categoryRoutes = require('./routes/category');
  app.use('/api/categories', categoryRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true, // Bypasses SSL validation
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('MongoDB Error:', err)
    process.exit(1)
  })

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
