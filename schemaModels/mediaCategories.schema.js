const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mediaCatSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("mediaCat", mediaCatSchema);
