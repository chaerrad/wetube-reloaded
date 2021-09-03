import express from "express";
import {watch,upload,deleteVideo,getEdit,postEdit} from "../controllers/videoControllers.js";


const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)",watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

export default videoRouter;