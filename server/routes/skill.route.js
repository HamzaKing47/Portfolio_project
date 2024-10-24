import express from "express";
import addSkill from "../controllers/skill/addSkill.controller.js";
import {
  adminCheckMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import getAllSkills from "../controllers/skill/getAllSkills.controller.js";
import deleteSkill from "../controllers/skill/deleteSkill.controller.js";
import editSkill from "../controllers/skill/editSkill.controller.js";

const skillRouter = express.Router();

skillRouter.post("/skill", authMiddleware, adminCheckMiddleware, addSkill);
skillRouter.get("/skills", authMiddleware, getAllSkills);
skillRouter.delete("/skill/:id", authMiddleware, adminCheckMiddleware, deleteSkill);
skillRouter.put("/skill/:id", authMiddleware, adminCheckMiddleware, editSkill);

export default skillRouter;
