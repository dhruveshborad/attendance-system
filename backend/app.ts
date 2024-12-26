import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", authRoutes);

mongoose.connect("mongodb://localhost:27017/face_recognition");

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
