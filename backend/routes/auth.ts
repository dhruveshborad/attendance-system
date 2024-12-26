import express from "express";
import User from "../models/User";
import * as faceapi from "face-api.js";
const router = express.Router();

// Register face
router.post("/register", async (req, res) => {
  const { descriptor } = req.body;
  const user = new User({ name: "test_user", faceDescriptor: descriptor });
  await user.save();
  res.status(201).send({ message: "Face registered successfully!" });
});

// Face login
router.post(
  "/login",
  async (
    req: { body: { descriptor: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: {
          (arg0: { success: boolean; user?: string }): void;
          new (): any;
        };
      };
    }
  ) => {
    const { descriptor } = req.body;
    const users = await User.find();
    const threshold = 0.6; // Adjust based on requirements
    for (const user of users) {
      const distance = faceapi.euclideanDistance(
        descriptor,
        user.faceDescriptor
      );
      if (distance < threshold) {
        return res.status(200).send({ success: true, user: user.name });
      }
    }
    res.status(401).send({ success: false });
  }
);

export default router;
