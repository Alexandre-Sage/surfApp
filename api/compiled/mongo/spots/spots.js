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
    orientation: [{ type: String, required: true }],
    optimalConditions: [
        {
            wind: {
                strength: { type: String, required: false },
                orientation: { type: String, required: false }
            },
            swell: {
                size: { type: String, required: false },
                period: { type: String, required: false },
                orientation: { type: String, required: false }
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
    sessions: [{ type: String, required: false }],
    creationDate: { type: Date, required: true }
});
exports.SpotSchema = SpotSchema;
const Spot = (0, mongoose_1.model)("Spot", SpotSchema);
exports.Spot = Spot;
Spot.createIndexes();
