import { Schema, model } from "mongoose";
const SessionSchema = new Schema({
    userId: { type: String, required: true },
    date: { type: Date, required: true },
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
const UserSession = model("Session", SessionSchema);
export { UserSession, SessionSchema };
