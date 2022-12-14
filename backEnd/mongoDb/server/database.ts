import mongoose, { Connection, Schema } from "mongoose";
import { ImageInterface, ImageSchema } from "../images/image";
import { ImageRepository } from "../repository/imageRepository";
import { MyThing } from "../repository/repositoryClass";
import { SpotRepository } from "../repository/spotRepository";
import { UserRepository } from "../repository/userRepository";
import { SessionInterface } from "../sessions/sessionInterface";
import { SessionSchema } from "../sessions/sessions";
import { SpotSchema } from "../spots/spot";
import { SpotInterface } from "../spots/spotInterface";
import { UserInterface } from "../user/userInterface";
import { UserSchema } from "../user/users";

class Database {
  readonly mongoose: Connection
  imageRepository: ImageRepository
  userRepository: UserRepository
  spotRepository: SpotRepository
  constructor(
    readonly spotSchema: Schema<SpotInterface>,
    readonly sessionSchema: Schema<SessionInterface>,
    readonly userSchema: Schema<UserInterface>,
    readonly imageSchema: Schema<ImageInterface>,
  ) {
    // super(Connection)
    this.userSchema = userSchema;
    this.spotSchema = spotSchema;
    this.imageSchema = imageSchema;
    this.sessionSchema = sessionSchema;
    this.imageRepository = {} as ImageRepository;
    this.userRepository = {} as UserRepository;
    this.spotRepository = {} as SpotRepository;
    this.mongoose = mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
      autoIndex: true,
    });
  }
  defineModels = () => {

  }
  databaseInit() {
    this.mongoose.model("Spot", SpotSchema);
    this.mongoose.model("User", UserSchema);
    this.mongoose.model("Session", SessionSchema);
    this.mongoose.model("Image", ImageSchema);
    this.imageRepository = new ImageRepository(this.mongoose.models.Image);
    this.userRepository = new UserRepository(this.mongoose.models.User);
    this.spotRepository = new SpotRepository(this.mongoose.models.Spot);
  }
}
const database = new Database(SpotSchema, SessionSchema, UserSchema, ImageSchema)

database.databaseInit()
export { database, Database };
