import express from "express";
import addBlog from "../controllers/blog/addBlog.controller.js";
import {
  authMiddleware,
  adminCheckMiddleware,
} from "../middlewares/auth.middleware.js";

const blogRouter = express.Router();

blogRouter.post("/blog", authMiddleware, adminCheckMiddleware, addBlog);
blogRouter.get(
  "/blog-image/:id",
  authMiddleware,
  adminCheckMiddleware,
  addBlog
);
blogRouter.get(
  "/blog-image/:id",
  authMiddleware,
  adminCheckMiddleware,
  addBlog
);

export default blogRouter;
