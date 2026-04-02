const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 4000;

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// Serve uploaded images as static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// CORS — allow frontend origins
const allowedOrigins = [
  process.env.FRONTEND_URL, // Production frontend
  "https://maram-heritage.netlify.app",
  "https://maram-blogs-feeee.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

const authRoutes = require("./src/routes/auth.user");
const blogRoutes = require("./src/routes/blog.route");
const commentRoutes = require("./src/routes/comment.route");

// Routes setup
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);

// Root route (always accessible)
app.get("/", (req, res) => {
  res.send("Maram Blogs Server is Running..!");
});

// Health check
app.get("/api/health", (req, res) => {
  const dbState = mongoose.connection.readyState;
  const states = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };
  res.json({ status: "ok", database: states[dbState] || "unknown" });
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      retryWrites: true,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    console.error("⚠️  Server is running but database features won't work.");
    console.error("⚠️  Please check:");
    console.error("   1) MongoDB Atlas cluster is active (not paused)");
    console.error(
      "   2) Your IP address is whitelisted in Atlas Network Access",
    );
    console.error("   3) Database credentials are correct");
    console.error("   4) Your internet connection is stable");
  }
};

connectDB();

app.listen(port, () => {
  console.log(`🚀 Maram Blogs server listening on port ${port}`);
});
