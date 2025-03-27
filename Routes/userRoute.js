import express from "express"
import { loginUser,registerUser,testBackend } from "../Controller/userController.js"
const userRouter=express.Router()
userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.get("/test",testBackend);

export default userRouter;