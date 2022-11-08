import mongoose, { Mongoose } from "mongoose";
import { SessionSchema } from "../sessions/sessions";
import { SpotSchema } from "../spots/spot";
import { SpotInterface } from "../spots/spotInterface";
import { User, UserSchema } from "../user/users";

type Database = "Spot" | "User" | "Session";

const database = mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
  autoIndex: true,
});
database.model("Spot", SpotSchema);
database.model("User", UserSchema);
database.model("Session", SessionSchema);
export { database, Database }