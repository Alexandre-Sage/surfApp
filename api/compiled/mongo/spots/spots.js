"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotSchema = exports.Spot = void 0;
const mongoose_1 = require("mongoose");
const SpotSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    spotName: { type: String, required: true },
    country: { type: String, required: true },
    type: {
        waveType: { type: String, required: true },
        bottomType: { type: String, required: true },
    },
    location: {
        type: { type: String, required: true },
        coordinates: [{ type: String, required: true }]
    },
    orientation: [{ type: String, required: false }],
    optimalConditions: [
        {
            wind: {
                strength: { type: String, require: false },
                orientation: { type: String, require: false }
            },
            swell: {
                size: { type: String, require: false },
                period: { type: String, require: false },
                orientation: { type: String, require: false }
            }
        }
    ],
    picture: [
        {
            path: { type: String, required: false },
            place: { type: String, required: false },
            uploadDate: { type: Date, required: false }
        }
    ],
    sessions: [{ type: String, require: false, unique: true }],
    creationDate: { type: Date, required: true }
});
exports.SpotSchema = SpotSchema;
const Spot = (0, mongoose_1.model)("Spot", SpotSchema);
exports.Spot = Spot;
Spot.createIndexes();
