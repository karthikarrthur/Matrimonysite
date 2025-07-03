import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

// Setup __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ================== Multer Setup ==================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `profile_${Date.now()}${ext}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed."), false);
  }
};

export const upload = multer({ storage, fileFilter });

// ================== Register User ==================
export const registerUser = async (req, res) => {
  const { fullName, email, password, gender } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      gender,
    });

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        gender: newUser.gender,
        city: "",
        bio: "",
        profileImage: "",
      },
    });
  } catch (err) {
    console.error("Register Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ================== Login User ==================
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        fullName: user.fullName,
        email: user.email,
        city: user.city || "",
        gender: user.gender || "",
        bio: user.bio || "",
        profileImage: user.profileImage || "",
      },
    });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ================== Get My Profile ==================
export const getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      fullName: user.fullName,
      email: user.email,
      city: user.city || "",
      gender: user.gender || "",
      bio: user.bio || "",
      profileImage: user.profileImage || "",
    });
  } catch (err) {
    console.error("Get Profile Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ================== Update My Profile ==================
export const updateMyProfile = async (req, res) => {
  try {
    const { fullName, city, gender, bio } = req.body;
    const profileImage = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updateFields = {
      ...(fullName && { fullName }),
      ...(city && { city }),
      ...(gender && { gender }),
      ...(bio && { bio }),
      ...(profileImage && { profileImage }),
    };

    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      updateFields,
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      message: "Profile updated successfully",
      fullName: updatedUser.fullName,
      email: updatedUser.email,
      city: updatedUser.city || "",
      gender: updatedUser.gender || "",
      bio: updatedUser.bio || "",
      profileImage: updatedUser.profileImage || "",
    });
  } catch (err) {
    console.error("Update Profile Error:", err.message);
    res.status(500).json({
      message: "Update failed. Please try again.",
      error: err.message,
    });
  }
};
