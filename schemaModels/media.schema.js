const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mediaFilePath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("media", mediaSchema);
