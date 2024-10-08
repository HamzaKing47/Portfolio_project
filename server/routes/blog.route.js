import express from "express";
import addBlog from "../controllers/blog/addBlog.controller.js";
import {
  authMiddleware,
  adminCheckMiddleware,
} from "../middlewares/auth.middleware.js";

const blogRoute = express.Router();

blogRoute.post("/blog", authMiddleware, adminCheckMiddleware, addBlog);

export default blogRoute;
