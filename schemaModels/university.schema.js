const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const universitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logoPath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("university", universitySchema);
