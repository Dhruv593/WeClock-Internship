// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// Import Routes
const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/userRoute');

// Use the routes with the /api prefix
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
