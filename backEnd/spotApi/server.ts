import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from "morgan";
//ROUTES 
import addSpotRoute from "./routes/spotCreation/spotCreationRoute";
import getOneSpot from "./routes/getOneSpot/getOneSpotRoute"
import getAllSpot from "./routes/getAllSpot/getAllSpotRoute"
const server = express();
console.log(process.env.PORT)
process.env.NODE_ENV === "developpment" ? server.use(logger("dev")) : null;
server.set("trust proxy", 1);

server.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true
}));

server.use(express.static(`${process.cwd()}/src`))
server.use(bodyParser.urlencoded({ extended: true, limit: "50M" }));
server.use(cookieParser(process.env.COOKIE_SECRET))
server.use(express.json());

server.use("/spot/newSpot", addSpotRoute);
server.use("/spot/getSpot", getOneSpot);
server.use("/spot/getAllSpots", getAllSpot);

const httpServer = http.createServer(server);
httpServer.listen(process.env.PORT, () => {
  console.log(`Server listening on: ${process.env.PORT}`);
});
export default server;