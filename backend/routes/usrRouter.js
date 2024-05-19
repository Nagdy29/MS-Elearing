import express from "express";
import {
  alluser,
  getUser,
  loginUser,
  registerUser,
  removeUser,
} from "../controles/userControl.js";
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getUser);
userRouter.get("/", alluser);
userRouter.post("/remove", removeUser);

export default userRouter;
