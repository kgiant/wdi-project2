const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  nameEvent: { type: String, required: true },
  date: Date,
  country: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  sport: { type: String, required: true },
  discipline: [{ type: String, required: true }],
  image: { type: String },
  qualifier: [{type: String}]
});

module.exports = mongoose.model('Event', eventSchema);
