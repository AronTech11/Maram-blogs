const mongoose = require("mongoose");
require("dotenv").config({ path: require("path").join(__dirname, "../.env") });

mongoose.connect(process.env.MONGODB_URL).then(async () => {
  const Blog = require("../src/model/blog.model");

  const posts = await Blog.find({ description: /\[seed:curated\]/ }).lean();
  console.log(`Found ${posts.length} posts with [seed:curated] tag.\n`);

  for (const post of posts) {
    const cleaned = post.description
      .replace(/\[seed:curated\]\s*/gi, "")
      .trim();

    await Blog.updateOne({ _id: post._id }, { $set: { description: cleaned } });
    console.log(`Cleaned: "${post.title}" → "${cleaned}"`);
  }

  console.log("\nDone.");
  mongoose.disconnect();
});
