/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const articlesRouter = require('./routes/articles');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOrigin = process.env.CORS_ORIGIN || 'https://derananews-web.vercel.app/'; 
app.use(cors({
  origin: "*", 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Include Authorization header
}));

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send("ello world")
})

// Routes
app.use('/api/articles', articlesRouter);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// Basic Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
