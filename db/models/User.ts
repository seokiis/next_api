import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, default: "", required: true },
    email: {
      type: String,
      default: "",
      unique: true,
      index: true,
      required: true,
    },
    password: { type: String, default: "", required: true },
    role: { type: String, default: "", required: true },
  },
  { timestamps: true }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
