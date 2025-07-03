import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/UserRoutes.js";
import { fileURLToPath } from "url";

// ========== Setup for ES Modules (__dirname) ==========
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========== Load Environment Variables ==========
dotenv.config();

// ========== Connect to MongoDB ==========
connectDB();

// ========== Initialize Express App ==========
const app = express();

// ========== Middleware ==========
app.use(cors());
app.use(express.json()); // Accept JSON payloads

// ========== Serve Static Files (for profile uploads) ==========
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// ========== API Routes ==========
app.use("/api/users", userRoutes);

// ========== Default Root Route ==========
app.get("/", (req, res) => {
  res.send("✅ ShaadiRoots API is running...");
});

// ========== Start the Server ==========
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
