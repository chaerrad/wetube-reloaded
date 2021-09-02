import express from "express";
import {watch,upload,deleteVideo,getEdit,postEdit} from "../controllers/videoControllers.js";


const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)",watch);
videoRouter.get("/:id(\\d+)/edit",getEdit);
videoRouter.get("/:id/(\\d+)delete",postEdit);



export default videoRouter;