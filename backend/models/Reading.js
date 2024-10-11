const mongoose = require('mongoose');

const ReadingSchema = new mongoose.Schema({
  date: { type: String, required: true },
  bp: { type: String, required: true },
  sugar: { type: String, required: true },
});

const Reading = mongoose.model('Reading', ReadingSchema);
module.exports = Reading;
