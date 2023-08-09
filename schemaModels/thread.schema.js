const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const threadSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: "chat",
    required: true,
  },
  media: {
    type: Schema.Types.ObjectId,
    ref: "media",
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  users: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("thread", threadSchema);
