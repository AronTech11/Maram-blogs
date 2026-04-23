const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../model/user.model");
const generateToken = require("../middleware/generateToken");
const verifyToken = require("../middleware/verifyToken");
const { isSuperAdmin, isAdminOrAbove } = require("../middleware/roles");
require("dotenv").config();

// Register endpoint
router.post("/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).send({
        message:
          existingUser.email === email
            ? "Email already registered"
            : "Username already taken",
      });
    }
    const user = new User({ email, password, username });
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Registration failed. Please try again." });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  try {
    // console.log(req.body)
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log(user._id)
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const token = await generateToken(user._id); // Generate token with user ID
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
      // Match the JWT expiry (1h) so cookie doesn't disappear early.
      maxAge: 60 * 60 * 1000,
    });
    res.status(200).send({
      message: "Logged in successfully",
      token,
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send({ message: "Login failed" });
  }
});

// Logout endpoint (optional)
router.post("/logout", (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";
  res.clearCookie("token", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
  });
  res.status(200).send({ message: "Logged out successfully" });
});

// all users — superadmin only
router.get("/users", verifyToken, isSuperAdmin, async (req, res) => {
  try {
    const users = await User.find({}, "id email username role createdAt");
    res.status(200).send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ message: "Failed to fetch users" });
  }
});

// delete a user — superadmin only
router.delete("/users/:id", verifyToken, isSuperAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const targetUser = await User.findById(id);
    if (!targetUser) {
      return res.status(404).send({ message: "User not found" });
    }
    // Prevent deleting another superadmin
    if (targetUser.role === "superadmin") {
      return res
        .status(403)
        .send({ message: "Cannot delete a super admin account" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send({ message: "Failed to delete user" });
  }
});

// update a user role — superadmin only
router.put("/users/:id", verifyToken, isSuperAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    // Validate role
    if (!["user", "admin", "superadmin"].includes(role)) {
      return res.status(400).send({ message: "Invalid role" });
    }
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User role updated successfully", user });
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).send({ message: "Failed to update user role" });
  }
});

// Forgot password - generate reset token
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      // Don't reveal if email exists or not for security
      return res.status(200).send({
        message:
          "If an account with that email exists, a reset link has been generated.",
      });
    }

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    // In production, you'd send an email with the reset link.
    // For now, we return the token directly so the frontend can use it.
    const resetUrl = `${req.headers.origin || "http://localhost:5173"}/reset-password/${resetToken}`;

    console.log(`Password reset link for ${email}: ${resetUrl}`);

    res.status(200).send({
      message: "Password reset link has been generated.",
      // Include token in response for development (remove in production with email service)
      resetToken,
      resetUrl,
    });
  } catch (error) {
    console.error("Error in forgot password:", error);
    res
      .status(500)
      .send({ message: "Failed to process password reset request" });
  }
});

// Reset password with token
router.post("/reset-password/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password || password.length < 6) {
      return res
        .status(400)
        .send({ message: "Password must be at least 6 characters" });
    }

    // Hash the token from the URL to match the stored hash
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .send({ message: "Reset token is invalid or has expired" });
    }

    // Set new password
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).send({
      message: "Password has been reset successfully. You can now login.",
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).send({ message: "Failed to reset password" });
  }
});

module.exports = router;
