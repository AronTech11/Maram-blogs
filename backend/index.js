

const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 4000; 

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({ 
  origin: "https://maram-blogs-feeee.vercel.app",
  credentials: true,
}));

const authRoutes = require('./src/routes/auth.user');
const blogRoutes = require('./src/routes/blog.route');
const commentRoutes = require('./src/routes/comment.route');

// Routes setup
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);


async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  app.get('/', (req, res) => {
    res.send('Maram Blogs Server is Running..!');
  });
}



main().then(() => console.log('Mongodb connected successfully!')).catch(err => console.log(err));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
