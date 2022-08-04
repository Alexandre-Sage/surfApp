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
    origin: `${process.env.HOSTTWO}${process.env.PORT}`,
    methods: ["GET", "POST"],
    credentials: true
}));

server.use(bodyParser.urlencoded({ extended: false }));
process.env.NODE_ENV === "development" ? server.use(logger("dev")) : null;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser("secret"));
server.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        sameSite: "strict"
    },
}));

server.use("/sign-up", signUp);
server.use("/login", login);
server.use("/csrf", csrf);
const httpServer = http.createServer(server);
httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening on: ${process.env.PORT}`);
});

export default server;
