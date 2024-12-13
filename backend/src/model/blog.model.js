const mongoose = require('mongoose');

const FeatureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: String, required: true }
});

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    content: { type: Object, required: true },
    coverImg: { type: String, required: true }, // Ensure coverImg is stored as a URL
    category: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: Number,
    createdAt: { type: Date, default: Date.now },
  });

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;