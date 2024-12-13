// File: config/multerConfig.js

const fs = require('fs');
const multer = require('multer');
const path = require('path');

// Ensure 'uploads' folder exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir); // Creates the 'uploads' folder if it doesn't exist
}

// Set up storage configuration for multer (store the file in the 'uploads' folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Store files in 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
