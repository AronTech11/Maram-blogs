const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Create unique filename: timestamp-randomstring.ext
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `blog-${uniqueSuffix}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  // Allow images + PDFs (for newspaper scans / documents)
  const allowedTypes = /jpeg|jpg|png|gif|webp|svg|pdf/;
  const extMatch = allowedTypes.test(
    path.extname(file.originalname).toLowerCase(),
  );
  const mimeMatch = allowedTypes.test(file.mimetype);

  if (extMatch && mimeMatch) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only image/pdf files (jpg, jpeg, png, gif, webp, svg, pdf) are allowed",
      ),
      false,
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
  fileSize: 25 * 1024 * 1024, // 25MB max
  },
});

// Backwards compatible default export: use as `upload.single("image")`
// Convenience helpers for new features.
upload.singleImage = upload.single("image");
upload.multiImages = upload.array("images", 10);
upload.attachment = upload.single("file");

module.exports = upload;
