import express from "express";
const Port = 4000;
const app = express();

const gossipMiddleWare = (req, res, next) => {
    console.log("Steven Gerrard");
    next();
}

const getInToServer =  (req, res) => {
    return res.send ("We go norich");
}
app.get("/", gossipMiddleWare ,getInToServer);

const  handleCheck = () =>  console.log(`Server listening on port http://localhost:${Port}`);
app.listen(Port,handleCheck);
