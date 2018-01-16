const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String },
  country: { type: String, required: true },
  image: { type: String },
  email: { type: String }
});

module.exports = mongoose.model('Team', teamSchema);
