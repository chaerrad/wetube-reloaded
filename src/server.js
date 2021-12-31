import express from "express";
import morgan from "morgan";
import session from "express-session";
import globalRouter from "./routers/rootRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import {localsMiddleware} from "./middlewares";


const app = express();
const logger = morgan("dev");

app.set("view engine","pug");
app.set("views", process.cwd()+"/src/views");
app.use(logger);
app.use(express.urlencoded({extended: true}));


app.use(
    session({
        secret: "Hello",
        resave: true,
        saveUninitialized: true,
    })
);

app.use(localsMiddleware);
app.use("/", globalRouter);
app.use("/users",userRouter);
app.use("/videos", videoRouter);

export default app;
