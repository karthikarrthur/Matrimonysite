import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    default: "", // ✅ optional
  },
  bio: {
    type: String,
    default: "", // ✅ optional
  },
});

const User = mongoose.model("User", userSchema);

export default User;
