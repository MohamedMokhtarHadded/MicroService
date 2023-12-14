const express = require('express');
const cors = require('cors');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Add JSON parsing middleware
router.use(express.json());

// Enable CORS for your server
router.use(cors());

// Define a route for user signup
router.post('/signup', async (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
  try {
    // Extract user data from the request body
    const { email, password } = req.body;

    // Check if the email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create a new user
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({ email, password:hashedPassword });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define a route for user sign-in
router.post('/signin', async (req, res) => {
  try {
    // Extract user data from the request body
    const { email, password } = req.body;

    // Check if the email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find the user by email in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // If the email and password are correct, generate a JWT
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      'your-secret-key', // Replace with your actual secret key
      {
        expiresIn: '1h', // Set the token expiration time (e.g., 1 hour)
      }
    );

    // Respond with the JWT as well as any other user data you want to include
    res.status(200).json({ message: 'Sign-in successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;