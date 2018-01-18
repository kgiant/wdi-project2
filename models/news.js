const mongoose   = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  article: { type: String, required: true },
  image: { type: String }
  // createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  // belongTo: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('News', newsSchema);
