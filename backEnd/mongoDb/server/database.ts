import mongoose, { Connection, Schema } from "mongoose";
import { ImageInterface, ImageSchema } from "../images/image";
import { ImageRepository } from "../repository/imageRepository";
import { SpotRepository } from "../repository/spotRepository";
import { UserRepository } from "../repository/userRepository";
import { SessionInterface } from "../sessions/sessionInterface";
import { SessionSchema } from "../sessions/sessions";
import { SpotSchema } from "../spots/spot";
import { SpotInterface } from "../spots/spotInterface";
import { UserInterface } from "../user/userInterface";
import { UserSchema } from "../user/users";

class Database {
  private readonly database: Connection
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
    this.database = mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
      autoIndex: true,
    });
  }
  defineModels = () => {

  }
  databaseInit() {
    this.database.model("Spot", SpotSchema);
    this.database.model("User", UserSchema);
    this.database.model("Session", SessionSchema);
    this.database.model("Image", ImageSchema);
    this.imageRepository = new ImageRepository(this.database.models.Image);
    this.userRepository = new UserRepository(this.database.models.User);
    this.spotRepository = new SpotRepository(this.database.models.Spot);
  }
}

const database = new Database(SpotSchema, SessionSchema, UserSchema, ImageSchema)
database.databaseInit()
export { database, Database };
