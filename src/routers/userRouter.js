import express from "express";
import { Edit,deleteUsers } from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.get("/edit",Edit);
userRouter.get("/delete",deleteUsers);

export default userRouter;