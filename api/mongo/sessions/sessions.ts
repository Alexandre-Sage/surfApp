import { Schema, model } from "mongoose";
import { SessionInterface } from "../mongoInterfaces/sessionInterface";

const SessionSchema = new Schema<SessionInterface>({
    date: { type: Date, required: true },
    spot: { type: String, required: true },
    userName: { type: String, required: true },
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
const Session = model<SessionInterface>("Session", SessionSchema);
export { Session, SessionSchema };
