// Check for hyphen patterns in seeded blog content
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

mongoose.connect(process.env.MONGODB_URL).then(async () => {
  const Blog = require('../src/model/blog.model');
  const blogs = await Blog.find({ description: /seed:maram-culture-v1/ }).lean();
  blogs.forEach(blog => {
    blog.content.blocks.forEach((b, i) => {
      let texts = [];
      if (b.data && b.data.text) texts.push(b.data.text);
      if (b.data && b.data.items) texts.push(...b.data.items);
      texts.forEach(t => {
        if (/( - |- $|^- )/.test(t)) {
          console.log('[' + blog.title.substring(0,35) + '] block', i, b.type, '|', t.substring(0, 120));
        }
      });
    });
  });
  await mongoose.disconnect();
});
