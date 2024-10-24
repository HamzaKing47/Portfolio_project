import express from "express";
import registerUser from "../controllers/user/registerUser.controller.js";
import loginUser from "../controllers/user/loginUser.controller.js";
import getUserInfo from "../controllers/user/getUserInfo.controller.js";
import updateUserInfo from "../controllers/user/updateUserInfo.controller.js";
import {
  adminCheckMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import getAllUsers from "../controllers/user/getAllUsers.controller.js";

const userRouter = express.Router();

userRouter.post("/user", registerUser);
userRouter.post("/user-login", loginUser);
userRouter.get("/user/:id", authMiddleware, getUserInfo);
userRouter.put("/user/:id", authMiddleware, updateUserInfo);
userRouter.get("/users", authMiddleware,adminCheckMiddleware, getAllUsers);

export default userRouter;
