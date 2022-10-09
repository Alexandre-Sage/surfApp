import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from "morgan";
//ROUTES 
import signUp from "./routes/signUp/signUp.js";
import logIn from "./routes/login/login.js";
import mongoose from "mongoose";

const server = express();
console.log(process.env.PORT)
process.env.NODE_ENV === "developpment" ? server.use(logger("dev")) : null;
server.set("trust proxy", 1);

server.use(cors({
    origin: [`${process.env.FRONT_END}`, `${process.env.HOST}`],
    methods: ["GET", "POST"],
    credentials: true
}));

server.use(express.static(`${process.cwd()}/src`))
server.use(bodyParser.urlencoded({ extended: true, limit: "50M" }));
server.use(cookieParser(process.env.COOKIE_SECRET))
server.use(express.json());
server.use("/signUp", signUp);
server.use("/login", logIn);

//mongoose.connect(`${process.env.MONGO_ATLAS}`)
const httpServer = http.createServer(server);
httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening on: ${process.env.PORT}`);
});
export default server;