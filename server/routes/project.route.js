import express from "express";
import addProject from "../controllers/project/addProject.controller.js";
import {
  adminCheckMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import getAllProjects from "../controllers/project/getAllProjects.controller.js";
import getProjectImage from "../controllers/project/getProjectImage.controller.js";
import deleteProject from "../controllers/project/deleteProject.controller.js";
import editProject from "../controllers/project/editProject.controller.js";

const projectRouter = express.Router();

projectRouter.post(
  "/project",
  authMiddleware,
  adminCheckMiddleware,
  addProject
);
projectRouter.get("/projects", authMiddleware, getAllProjects);
projectRouter.get("/project-image/:id", authMiddleware, getProjectImage);
projectRouter.delete(
  "/project/:id",
  authMiddleware,
  adminCheckMiddleware,
  deleteProject
);
projectRouter.put(
  "/project/:id",
  authMiddleware,
  adminCheckMiddleware,
  editProject
);

export default projectRouter;
