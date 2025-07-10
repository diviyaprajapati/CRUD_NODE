import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // ✅ lowercase
  email: { type: String, required: true, unique: true }, // ✅ lowercase
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
