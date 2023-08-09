const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catValsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  catId: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
});

module.exports = mongoose.model("catVals", catValsSchema);
