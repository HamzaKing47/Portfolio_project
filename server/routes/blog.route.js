import express from "express";
import addBlog from "../controllers/blog/addBlog.controller.js";
import {
  authMiddleware,
  adminCheckMiddleware,
} from "../middlewares/auth.middleware.js";
import getBlogImage from "../controllers/blog/getBlogImage.controller.js";
import deleteBlog from "../controllers/blog/deleteBlog.controller.js";
import getAllBlogs from "../controllers/blog/getAllBlogs.controller.js";
import editBlog from "../controllers/blog/editBlog.controller.js";

const blogRouter = express.Router();

blogRouter.post("/blog", authMiddleware, adminCheckMiddleware, addBlog);
blogRouter.get("/blog-image/:id", authMiddleware, getBlogImage);
blogRouter.get("/blogs", authMiddleware, getAllBlogs);
blogRouter.delete(
  "/blog/:id",
  authMiddleware,
  adminCheckMiddleware,
  deleteBlog
);
blogRouter.put("/blog/:id", authMiddleware, adminCheckMiddleware, editBlog);

export default blogRouter;
