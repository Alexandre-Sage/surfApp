import http from "http";
import express, { Express, Request, Response, NextFunction } from "express";
import path from "path";
import dotenv from "dotenv";
import session, { Session } from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import logger from "morgan";
import cors from "cors";
import { Types } from "mongoose";
/*ROUTES*/
import signUp from "./routes/signUp/signUp";
import login from "./routes/login/login";
import csrf from "./routes/csrf/csrf";
import userProfil from "./routes/userProfil/userProfil";
const server: Express = express();
dotenv.config({ path: path.resolve(".env") });
declare module "express-session" {
    export interface Session {
        csurfToken: string;
        sessionToken: string;
        userId: Types.ObjectId;
    }
};
/*server.locals.db=connect(`${process.env.MONGO_ATLAS}`,{
    autoIndex: true,
})*/
server.use(cors({
    origin: `${process.env.HOSTTWO}${process.env.PORT}`/*"http://localhost:19006"*/,
    methods: ["GET", "POST"],
    credentials: true
}));
server.set("trust proxy", 1);
server.use(bodyParser.urlencoded({ extended: true }));
process.env.NODE_ENV === "development" ? server.use(logger("dev")) : null;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser("secret"));
server.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        sameSite: "none",
        secure: false,
    },
}));

server.use("/sign-up", signUp);
server.use("/login", login);
server.use("/csrf", csrf);
server.use("/userProfil", userProfil);
const httpServer = http.createServer(server);
httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening on: ${process.env.PORT}`);
});

export default server;
