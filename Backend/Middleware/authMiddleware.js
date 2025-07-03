import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// ================== Auth Middleware ==================
export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      // Extract token from "Bearer <token>"
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach decoded user ID to request
      req.user = { userId: decoded.userId };

      next(); // Proceed to route/controller
    } catch (error) {
      console.error("❌ Invalid token:", error.message);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  } else {
    console.warn("⚠️ No token found in Authorization header");
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
};
