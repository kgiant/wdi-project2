const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  article: { type: String, required: true },
  image: { type: String }
});

module.exports = mongoose.model('News', newsSchema);
