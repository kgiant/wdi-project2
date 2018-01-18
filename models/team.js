const mongoose  = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String },
  country: { type: String, required: true },
  image: { type: String },
  email: { type: String }
  // createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  // teamMembers: { type: mongoose.Schema.ObjectId, ref: 'Racer'},
  // teamNews: { type: mongoose.Schema.ObjectId, ref: 'News'}
});

module.exports = mongoose.model('Team', teamSchema);
