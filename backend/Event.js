// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  price: { type: Number, required: true },
  ticketsLeft: { type: Number, required: true },
  image: { type: String, required: true },
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
