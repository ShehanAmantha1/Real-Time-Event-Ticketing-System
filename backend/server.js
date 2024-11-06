const express = require('express');
const cors = require('cors'); // Import the CORS package
const mongoose = require('mongoose'); // Import mongoose (if you're using MongoDB)
const bodyParser = require('body-parser'); // Import body-parser to parse incoming JSON requests
const Event = require('./Event'); // Import your Event model

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins (or restrict it as per your needs)
app.use(bodyParser.json()); // Parse JSON request bodies

// Example API route for fetching events
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find(); // Get all events from the database
    res.status(200).json(events); // Return events as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving events', error: error.message });
  }
});

// POST endpoint to create a new event
app.post('/api/events', async (req, res) => {
  const { name, date, time, venue, price, ticketsLeft, image } = req.body;

  try {
    // Validate required fields
    if (!name || !date || !time || !venue || !price || !ticketsLeft || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new event in the database
    const newEvent = new Event({
      name,
      date,
      time,
      venue,
      price: Number(price),
      ticketsLeft: Number(ticketsLeft),
      image,
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error: error.message });
  }
});

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/event-ticketing')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
