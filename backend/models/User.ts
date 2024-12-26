import mongoose from "mongoose";

// Define the User schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // User's name
  faceDescriptor: { type: [Number], required: true }, // Array to store face descriptor
});

// Export the User model
export default mongoose.model("User", UserSchema);
