const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const { isAdminOrAbove } = require("../middleware/roles");
const upload = require("../middleware/uploadImage");
const Blog = require("../model/blog.model");
const Comment = require("../model/comment.model");

// ============================================
// IMAGE UPLOAD ENDPOINT
// ============================================
router.post(
  "/upload-image",
  verifyToken,
  isAdminOrAbove,
  upload.singleImage,
  (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send({ message: "No image file provided" });
      }
      const imageUrl = `/uploads/${req.file.filename}`;
      res.status(200).send({
        message: "Image uploaded successfully",
        imageUrl,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).send({ message: "Failed to upload image" });
    }
  },
);

// ============================================
// MULTI IMAGE UPLOAD ENDPOINT (gallery)
// ============================================
router.post(
  "/upload-images",
  verifyToken,
  isAdminOrAbove,
  upload.multiImages,
  (req, res) => {
    try {
      const files = req.files || [];
      if (!files.length) {
        return res.status(400).send({ message: "No image files provided" });
      }

      const imageUrls = files.map((f) => `/uploads/${f.filename}`);
      res.status(200).send({
        message: "Images uploaded successfully",
        imageUrls,
      });
    } catch (error) {
      console.error("Error uploading images:", error);
      res.status(500).send({ message: "Failed to upload images" });
    }
  },
);

// ============================================
// ATTACHMENT UPLOAD ENDPOINT (pdf/image)
// ============================================
router.post(
  "/upload-attachment",
  verifyToken,
  isAdminOrAbove,
  upload.attachment,
  (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send({ message: "No file provided" });
      }
      const fileUrl = `/uploads/${req.file.filename}`;
      res.status(200).send({
        message: "File uploaded successfully",
        fileUrl,
        originalName: req.file.originalname,
        mimeType: req.file.mimetype,
        size: req.file.size,
      });
    } catch (error) {
      console.error("Error uploading attachment:", error);
      res.status(500).send({ message: "Failed to upload attachment" });
    }
  },
);

// ============================================
// CREATE POST — admin or superadmin only
// ============================================
router.post("/create-post", verifyToken, isAdminOrAbove, async (req, res) => {
  try {
    const newPost = new Blog({
      ...req.body,
      author: req.userId,
    });
    await newPost.save();
    res
      .status(201)
      .send({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send({ message: "Failed to create post" });
  }
});

// ============================================
// GET ALL POSTS — public
// ============================================
router.get("/", async (req, res) => {
  try {
    const { search, category, location } = req.query;
    let query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ];
    }
    if (category) query.category = { $regex: new RegExp(`^${category}$`, "i") };
    if (location) query.location = location;

    const posts = await Blog.find(query)
      .populate("author", "email username role")
      .sort({ createdAt: -1 });
    res.status(200).send(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send({ message: "Failed to fetch posts" });
  }
});

// ============================================
// GET SINGLE POST — public
// ============================================
router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Blog.findById(postId).populate(
      "author",
      "email username role",
    );

    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }

    const comments = await Comment.find({ postId }).populate(
      "user",
      "username email",
    );
    res.status(200).send({ post, comments });
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).send({ message: "Failed to fetch post" });
  }
});

// ============================================
// UPDATE POST — owner (admin) or superadmin
// ============================================
router.patch(
  "/update-post/:id",
  verifyToken,
  isAdminOrAbove,
  async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Blog.findById(postId);

      if (!post) {
        return res.status(404).send({ message: "Post not found" });
      }

      // Admins can only edit their own posts. Superadmins can edit any post.
      if (
        req.role === "admin" &&
        post.author.toString() !== req.userId.toString()
      ) {
        return res.status(403).send({
          message: "You can only edit your own posts.",
        });
      }

      const updatedPost = await Blog.findByIdAndUpdate(
        postId,
        { ...req.body },
        { new: true },
      );
      res
        .status(200)
        .send({ message: "Post updated successfully", post: updatedPost });
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).send({ message: "Failed to update post" });
    }
  },
);

// ============================================
// DELETE POST — owner (admin) or superadmin
// ============================================
router.delete("/:id", verifyToken, isAdminOrAbove, async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Blog.findById(postId);

    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }

    // Admins can only delete their own posts. Superadmins can delete any.
    if (
      req.role === "admin" &&
      post.author.toString() !== req.userId.toString()
    ) {
      return res.status(403).send({
        message: "You can only delete your own posts.",
      });
    }

    await Blog.findByIdAndDelete(postId);
    await Comment.deleteMany({ postId });

    res
      .status(200)
      .send({ message: "Post and associated comments deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).send({ message: "Failed to delete post" });
  }
});

// ============================================
// RELATED BLOGS — public
// ============================================
router.get("/related/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Blog ID is required" });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).send({ message: "Blog post not found" });
    }

    const titleRegex = new RegExp(blog.title.split(" ").join("|"), "i");
    const relatedPosts = await Blog.find({
      _id: { $ne: id },
      title: { $regex: titleRegex },
    });

    res.status(200).send(relatedPosts);
  } catch (error) {
    console.error("Error fetching related posts:", error);
    res.status(500).send({ message: "Failed to fetch related posts" });
  }
});

module.exports = router;
