import { Schema, model } from "mongoose";
import { SessionInterface } from "./sessionInterface";

const SessionSchema = new Schema<SessionInterface>({
  userId: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  spotId: { type: String, required: true },
  startTime: { type: Date, required: false },
  endTime: { type: Date, required: false },
  totalTime: { type: Date, required: false },
  swell: {
    size: { type: String, required: false },
    period: { type: String, required: false },
    orientation: { type: String, required: false }
  },
  wind: {
    strength: { type: String, required: false },
    orientation: { type: String, required: false }
  },
  comment: { type: String, required: false }
});
const UserSession = model<SessionInterface>("Session", SessionSchema);
export { UserSession, SessionSchema };
