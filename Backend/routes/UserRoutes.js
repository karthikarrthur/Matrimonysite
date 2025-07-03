import express from "express";
import {
  registerUser,
  loginUser,
  getMyProfile,
  updateMyProfile,
} from "../controllers/userController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { upload } from "../Middleware/multerMiddleware.js"; 

const router = express.Router();

// ✅ Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// ✅ Protected routes
router.get("/my-profile", protect, getMyProfile);

// ✅ Update profile (with image upload)
router.put(
  "/update-profile",
  protect,
  upload.single("profileImage"),
  updateMyProfile
);

export default router;
