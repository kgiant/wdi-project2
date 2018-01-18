const mongoose  = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String },
  country: { type: String, required: true },
  image: { type: String },
  email: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: false },
  racers: [{ type: mongoose.Schema.ObjectId, ref: 'Racer'}]
  // news: [{ type: mongoose.Schema.ObjectId, ref: 'News'}]
});

module.exports = mongoose.model('Team', teamSchema);
