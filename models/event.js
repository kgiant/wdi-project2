const mongoose    = require('mongoose');

const eventSchema = new mongoose.Schema({
  date: { type: String},
  country: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  sport: { type: String},
  discipline: [{ type: String }],
  championship: [{ type: String }],
  image: { type: String }
});

module.exports = mongoose.model('Event', eventSchema);
