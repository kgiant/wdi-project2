const mongoose    = require('mongoose');

const racerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  team: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  category: { type: String, required: true },
  sport: { type: String },
  discipline: [{ type: String }],
  fisRank: { type: Number, required: true },
  image: { type: String },
  favoriteSpot: { type: String },
  sponsors: [{type: String}],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: false }
});




module.exports = mongoose.model('Racer', racerSchema);
