import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/UserRoutes.js";
import { fileURLToPath } from "url";

// ===== Setup for ES Modules (__dirname) =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== Load .env Variables Early =====
dotenv.config();

// ===== Connect MongoDB =====
connectDB();

// ===== Init Express =====
const app = express();

// ===== Middleware =====
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// ===== Static Folder for Uploads =====
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ===== Routes =====
app.use("/api/users", userRoutes);

// ===== Default Route =====
app.get("/", (req, res) => {
  res.send("✅ ShaadiRoots API is running...");
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
