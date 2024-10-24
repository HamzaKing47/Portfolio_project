import express from "express";
import registerUser from "../controllers/user/registerUser.controller.js";
import loginUser from "../controllers/user/loginUser.controller.js";
import getUserInfo from "../controllers/user/getUserInfo.controller.js";
import updateUserInfo from "../controllers/user/updateUserInfo.controller.js";
import {
  adminCheckMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/user", registerUser);
userRouter.post("/user-login", loginUser);
userRouter.get("/user/:id", authMiddleware, adminCheckMiddleware, getUserInfo);
userRouter.put("/user/:id", authMiddleware, updateUserInfo);

export default userRouter;
