const mongoose = require('mongoose');








// const newsSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   subtitle: { type: String },
//   article: { type: String, required: true },
//   image: { type: String },
//   createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
// },  {
//   timestamps: true
// });

const teamSchema = new mongoose.Schema({
  name: { type: String },
  country: { type: String, required: true },
  image: { type: String },
  email: { type: String }
  // managedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Team', teamSchema);
