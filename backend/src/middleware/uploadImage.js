const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// ─────────────────────────────────────────────────────────────
// If Cloudinary env vars are present, use Cloudinary storage.
// Otherwise fall back to local disk storage (for local dev
// without a Cloudinary account configured).
// ─────────────────────────────────────────────────────────────
const useCloudinary =
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET;

let storage;

if (useCloudinary) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
      const isPdf = file.mimetype === "application/pdf";
      return {
        folder: "maram-blogs",
        // PDFs must use 'raw' resource type; images use 'image'
        resource_type: isPdf ? "raw" : "image",
        // Keep original file extension for PDFs
        format: isPdf ? "pdf" : undefined,
        // Unique public ID
        public_id: `blog-${Date.now()}-${Math.round(Math.random() * 1e9)}`,
      };
    },
  });

  console.log("☁️  Upload storage: Cloudinary");
} else {
  // Local disk fallback
  const uploadDir = path.join(__dirname, "../../uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, `blog-${uniqueSuffix}${ext}`);
    },
  });

  console.log(
    "💾  Upload storage: Local disk (set CLOUDINARY_* env vars for production)",
  );
}

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

upload.singleImage = upload.single("image");
upload.multiImages = upload.array("images", 10);
upload.attachment = upload.single("file");

module.exports = upload;
