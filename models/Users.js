import mongoose from "mongoose";

const userScheme = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: String,
  tagline: String,
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userScheme);
