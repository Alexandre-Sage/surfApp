"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSchema = exports.UserSession = void 0;
const mongoose_1 = require("mongoose");
const SessionSchema = new mongoose_1.Schema({
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
exports.SessionSchema = SessionSchema;
const UserSession = (0, mongoose_1.model)("Session", SessionSchema);
exports.UserSession = UserSession;
