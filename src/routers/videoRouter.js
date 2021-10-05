import express from "express";
import {watch,trending,getEdit,postEdit,getUpLoad,postUpLoad} from "../controllers/videoControllers.js";


const videoRouter = express.Router();

videoRouter.get("/:id",watch);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpLoad).post(postUpLoad);

export default videoRouter;