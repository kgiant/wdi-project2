const mongoose = require('mongoose');

const racerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  category: { type: String, required: true },
  sport: { type: String, required: true },
  discipline: [{ type: String, required: true }],
  fisRank: { type: Number, required: true },
  image: { type: String },
  sponsors: [{type: String}]
});

module.exports = mongoose.model('Racer', racerSchema);
