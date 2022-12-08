import "dotenv/config";
import express, { Express } from "express";
import http, { Server } from "http";
import cors, { CorsOptions } from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from "morgan";
//ROUTES 
import userImageUpload from "./routes/userPictureUpload";
import userProfilPicture from "./routes/getUserProfilPicture";
import spotImageUpload from "./routes/spotImage/spotImageRoute"
import { ImageRepositoryInterface } from "../mongoDb/repository/imageRepository";
import { database } from "../mongoDb/server/database";
import { ImageUploadService } from "./src/services/uploadService";
//declare module Express{
//  
//}

export class ImageServer {
  public readonly repository: ImageRepositoryInterface
  private readonly server: Express;
  private readonly corsOptions: CorsOptions;
  public readonly uploadService: ImageUploadService
  public httpServer: Server;
  constructor(private port: number, private env: string, private secret: string) {
    this.port = port;
    this.env = env;
    this.secret = secret;
    this.repository = database.imageRepository;
    this.uploadService = new ImageUploadService(this.repository)
    this.server = express()
    this.httpServer = {} as Server;
    this.corsOptions = {
      origin: [`${process.env.FRONT_END}`, `${process.env.HOST}`, "*"],
      methods: ["GET", "POST"],
      credentials: true
    }
  }
  init = () => {
    //this.env === "developpment" ? server.use(logger("dev")) : null;
    this.server.set("trust proxy", 1);
    this.server.use(cors(this.corsOptions));
    this.server.use(express.static(`${process.cwd()}/src`))
    this.server.use(bodyParser.urlencoded({ extended: true, limit: "50M" }));
    this.server.use(cookieParser(this.secret))
    this.server.use(express.json());
  }
  createServer = () => {
    this.init()
    this.server.use("/image/userImageUpload", userImageUpload);
    this.server.use("/image/allUserProfilPicture", userProfilPicture);
    this.server.use("/image/spotImageUpload", spotImageUpload)
    this.httpServer = http.createServer(this.server);
    return {
      server: this.server, httpServer: this.httpServer, repository: this.repository, services: { uploadService: this.uploadService }
    }
  }
}
const { httpServer, server, repository, services } = new ImageServer(parseInt(`${process.env.PORT}`), `${process.env.NODE_ENV}`, `${process.env.COOKIE_SECRET}`).createServer()
httpServer.listen(process.env.PORT, () => {
  console.log(`Server listening on: ${process.env.PORT}`);
});
export default server
export { repository, services };
//const server = express()
//console.log(process.env.PORT)
//process.env.NODE_ENV === "developpment" ? server.use(logger("dev")) : null;
//server.set("trust proxy", 1);
//
//server.use(cors({
//  origin: [`${process.env.FRONT_END}`, `${process.env.HOST}`, "*"],
//  methods: ["GET", "POST"],
//  credentials: true
//}));
//server.use(express.static(`${process.cwd()}/src`))
//server.use(bodyParser.urlencoded({ extended: true, limit: "50M" }));
//server.use(cookieParser(process.env.COOKIE_SECRET))
//server.use(express.json());

//server.use("/image/userImageUpload", userImageUpload);
//server.use("/image/allUserProfilPicture", userProfilPicture);
//const httpServer = http.createServer(server);
//httpServer.listen(process.env.PORT, () => {
//  console.log(`Server listening on: ${process.env.PORT}`);
//});
//export default server;
