import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  faceDescriptor: [Number], // Array of numbers for the face descriptor
});

export default mongoose.model("User", UserSchema);
