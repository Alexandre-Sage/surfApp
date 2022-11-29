import mongoose, { Connection, Mongoose } from "mongoose";
import { ImageInterface, ImageSchema } from "../images/image";
import { SessionInterface } from "../sessions/sessionInterface";
import { SessionSchema } from "../sessions/sessions";
import { SpotSchema } from "../spots/spot";
import { SpotInterface } from "../spots/spotInterface";
import { UserInterface } from "../user/userInterface";
import { User, UserSchema } from "../user/users";

type Database = "Spot" | "User" | "Session" | "Image";

class DatabaseClass {
  private readonly database: Connection
  constructor(
    readonly spotSchema: SpotInterface,
    readonly sessionSchema: SessionInterface,
    readonly userSchema: UserInterface,
    readonly imageSchema: ImageInterface,
  ) {
    this.userSchema = userSchema;
    this.spotSchema = spotSchema;
    this.imageSchema = imageSchema;
    this.sessionSchema = sessionSchema;
    this.database = mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
      autoIndex: true,
    });
  }
  databaseInit() {
    this.database.model("Spot", SpotSchema);
    this.database.model("User", UserSchema);
    this.database.model("Session", SessionSchema);
    this.database.model("Image", ImageSchema);
    return this.database;
  }
}


const database = mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
  autoIndex: true,
});
database.model("Spot", SpotSchema);
database.model("User", UserSchema);
database.model("Session", SessionSchema);
database.model("Image", ImageSchema)
export { database, Database, DatabaseClass }