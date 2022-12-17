import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";
import http from "http";
import { SessionRepository, SessionRepositoryInterface } from "../mongoDb/repository/sessionRepository";
import { Database, database } from "../mongoDb/server/database"
import { SessionService } from "./services/sessionService";
const corsOptions = {
    origin: [`${process.env.FRONT_END}`, `${process.env.HOST}`, "*"],
    methods: ["GET", "POST"],
    credentials: true
}
interface SessionServer {
    server: Express,
    repository: SessionRepositoryInterface
    service: SessionService

}

const setServerOptions = ({ server }: { server: Express }) => {
    server.use(logger("dev"))
    server.set("trust proxy", 1);
    server.use(cors(corsOptions));
    server.use(bodyParser.urlencoded({ extended: true, limit: "50M" }));
    server.use(express.json());
    return server;
}

const sessionServer = ({ server, repository, service }: SessionServer) => {
    setServerOptions({ server })
    return {
        httpServer: http.createServer(server),
        server,
        repository,
        service
    }
}


export const { httpServer, repository, server, service } = sessionServer({
    server: express(),
    repository: database.sessionRepository,
    service: new SessionService()
})

httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening on: ${process.env.PORT}`);
});
