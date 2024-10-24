import express from "express";
import contactUs from "../controllers/contact/contactUs.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const contactRouter = express.Router();

contactRouter.post("/contact", authMiddleware, contactUs);

export default contactRouter;
