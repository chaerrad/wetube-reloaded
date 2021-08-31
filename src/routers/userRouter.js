import express from "express";
import { Edit, remove, logout, see } from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.get("/logout",logout);
userRouter.get("/edit",Edit);
userRouter.get("/remove",remove);
userRouter.get(":id",see);

export default userRouter;