import express from "express";
import {watch,trending,getEdit,postEdit,getUpLoad,postUpLoad, deleteVideo,} from "../controllers/videoControllers.js";


const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})",watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpLoad).post(postUpLoad);

export default videoRouter;