// Dump all block content from seeded posts to find hyphens
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

mongoose.connect(process.env.MONGODB_URL).then(async () => {
  const Blog = require('../src/model/blog.model');
  const blogs = await Blog.find({ description: /seed:maram-culture-v1/ }).lean();
  
  console.log('=== SCANNING', blogs.length, 'POSTS ===\n');
  
  blogs.forEach(blog => {
    blog.content.blocks.forEach((b, i) => {
      if (b.type === 'list') {
        console.log('[' + blog.title.substring(0,40) + '] block', i, 'LIST items:');
        b.data.items.forEach(item => console.log('  ITEM:', JSON.stringify(item)));
      }
    });
  });
  
  await mongoose.disconnect();
  console.log('\nDone.');
});
