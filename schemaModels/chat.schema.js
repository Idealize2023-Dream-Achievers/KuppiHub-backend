const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  replies: {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  likes: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("chat", chatSchema);
