const mongoose     = require('mongoose');

const resultSchema = new mongoose.Schema({
  nameEvent: { type: String, required: true },
  date: Date,
  category: { type: String, required: true },
  discipline: { type: Number, required: true },
  firstPlace: { type: String, required: true},
  secondPlace: { type: String, required: true},
  thirdPlace: { type: String, required: true},
  eventVideo: { type: String}
});

module.exports = mongoose.model('Result', resultSchema);
