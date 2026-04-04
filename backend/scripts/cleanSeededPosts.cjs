const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

function cleanText(text) {
  if (typeof text !== "string") return text;
  return text
    .replace(/\s*—\s*/g, " ")
    .replace(/\s*–\s*/g, " ")
    .trim();
}

function cleanBlocks(blocks) {
  return blocks.map((block) => {
    if (!block.data) return block;
    const d = { ...block.data };
    if (typeof d.text === "string") d.text = cleanText(d.text);
    if (Array.isArray(d.items)) d.items = d.items.map(cleanText);
    return { ...block, data: d };
  });
}

mongoose.connect(process.env.MONGODB_URL).then(async () => {
  const Blog = require("../src/model/blog.model");
  const blogs = await Blog.find({
    description: /seed:maram-culture-v1/,
  }).lean();
  console.log("Found", blogs.length, "posts to clean.\n");

  for (const blog of blogs) {
    const newDescription = blog.description
      .replace(/\[seed:maram-culture-v1\]\s*/g, "")
      .replace(/\s*—\s*/g, " ")
      .replace(/\s*–\s*/g, " ")
      .trim();

    const newBlocks = cleanBlocks(blog.content.blocks);

    await Blog.findByIdAndUpdate(blog._id, {
      description: newDescription,
      content: { ...blog.content, blocks: newBlocks },
    });

    console.log("✅ Cleaned:", blog.title);
  }

  await mongoose.disconnect();
  console.log("\nDone.");
});
