import express from "express";
import {
  adminCheckMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import uploadResume from "../controllers/resume/uploadResume.controller.js";
import getResume from "../controllers/resume/getResume.controller.js";

const resumeRouter = express.Router();

resumeRouter.post(
  "/resume",
  authMiddleware,
  adminCheckMiddleware,
  uploadResume
);
resumeRouter.get("/resume", authMiddleware, getResume);

export default resumeRouter;
