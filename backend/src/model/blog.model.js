const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
});

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  content: { type: Object, required: true },
  coverImg: { type: String, required: true },
  category: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // account that published
  writer: { type: String, default: "" }, // original content writer / credited author
  attachments: {
    type: [
      {
        url: { type: String, required: true },
        name: { type: String, default: "" },
        mimeType: { type: String, default: "" },
        size: { type: Number, default: 0 },
      },
    ],
    default: [],
  },
  rating: Number,
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
