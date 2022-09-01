import http from "http";
import express, { Express, Request, Response, NextFunction, application } from "express";
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
import spot from "./routes/spot/spot";
/**//* */
import multer, { Multer, StorageEngine } from "multer";
import { request } from "chai";

const server: Express = express();
dotenv.config({ path: path.resolve(".env") });
declare module "express-session" {
    export interface Session {
        csurfToken: string;
        sessionToken: string;
        userId: Types.ObjectId;
        userName: string;
    }
};
/*server.locals.db=connect(`${process.env.MONGO_ATLAS}`,{
    autoIndex: true,
})*/
server.use(cors({
    origin: `${process.env.HOSTTWO}${process.env.PORT}`,/*"http://localhost:19006"*/
    methods: ["GET", "POST"],
    credentials: true
}));
server.set("trust proxy", 1);
server.use(bodyParser.urlencoded({ extended: true }));
//server.use(express.static(path.join(__dirname, "src")));
server.use(express.static(`${process.cwd()}/src`))
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
/*server.use(function (req, res, next) {
    const session = req.session;
    //const error = new CustomError(, 403);
    if (session.sessionToken && req.signedCookies["SESSION-TOKEN"] === session.sessionToken) {
        next()
    } else {
        res.status(777).json({
            message: "Something wrong happened please retry.",
            error: true
        })
    }
})*/
server.use("/csrf", csrf);
server.use("/userProfil", userProfil);
server.use("/spot", spot);
const httpServer = http.createServer(server);
httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening on: ${process.env.PORT}`);
});

export default server;
