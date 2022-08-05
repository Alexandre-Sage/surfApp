"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newSpot = exports.emptySpotName = exports.emptyLocationType = exports.emptyUserId = exports.emptyCountry = exports.emptyWaveType = void 0;
const spots_1 = require("../../../mongo/spots/spots");
const newSpot = new spots_1.Spot({
    userId: "test",
    spotName: "Test",
    country: "Test",
    type: {
        waveType: "Test",
        bottomType: "Test",
    },
    location: {
        type: "Point",
        coordinates: ["12", "56"]
    },
    orientation: ["Test"],
    optimalConditions: [
        {
            wind: {
                strength: "Test",
                orientation: "Test"
            },
            swell: {
                size: "Tets",
                period: "Tets",
                orientation: "Tets"
            }
        }
    ],
    sessions: ["Test", "Test2"],
    creationDate: Date.now(),
});
exports.newSpot = newSpot;
const emptyLocationType = new spots_1.Spot({
    userId: "test",
    spotName: "Test",
    country: "Test",
    type: {
        waveType: "Test",
        bottomType: "Test",
    },
    location: {
        //type:"Point",
        coordinates: ["12", "56"]
    },
    orientation: ["Test"],
    optimalConditions: [
        {
            wind: {
                strength: "Test",
                orientation: "Test"
            },
            swell: {
                size: "Tets",
                period: "Tets",
                orientation: "Tets"
            }
        }
    ],
    sessions: ["Test", "Test2"],
    creationDate: Date.now(),
});
exports.emptyLocationType = emptyLocationType;
const emptySpotName = new spots_1.Spot({
    userId: "test",
    //spotName:"Test",
    country: "Test",
    type: {
        waveType: "Test",
        bottomType: "Test",
    },
    location: {
        //type:"Point",
        coordinates: ["12", "56"]
    },
    orientation: ["Test"],
    optimalConditions: [
        {
            wind: {
                strength: "Test",
                orientation: "Test"
            },
            swell: {
                size: "Tets",
                period: "Tets",
                orientation: "Tets"
            }
        }
    ],
    sessions: ["Test", "Test2"],
    creationDate: Date.now(),
});
exports.emptySpotName = emptySpotName;
const emptyUserId = new spots_1.Spot({
    //userId:"test",
    spotName: "Test",
    country: "Test",
    type: {
        waveType: "Test",
        bottomType: "Test",
    },
    location: {
        //type:"Point",
        coordinates: ["12", "56"]
    },
    orientation: ["Test"],
    optimalConditions: [
        {
            wind: {
                strength: "Test",
                orientation: "Test"
            },
            swell: {
                size: "Tets",
                period: "Tets",
                orientation: "Tets"
            }
        }
    ],
    sessions: ["Test", "Test2"],
    creationDate: Date.now(),
});
exports.emptyUserId = emptyUserId;
const emptyCountry = new spots_1.Spot({
    userId: "test",
    spotName: "Test",
    //country:"Test",
    type: {
        waveType: "Test",
        bottomType: "Test",
    },
    location: {
        //type:"Point",
        coordinates: ["12", "56"]
    },
    orientation: ["Test"],
    optimalConditions: [
        {
            wind: {
                strength: "Test",
                orientation: "Test"
            },
            swell: {
                size: "Tets",
                period: "Tets",
                orientation: "Tets"
            }
        }
    ],
    sessions: ["Test", "Test2"],
    creationDate: Date.now(),
});
exports.emptyCountry = emptyCountry;
const emptyWaveType = new spots_1.Spot({
    userId: "test",
    spotName: "Test",
    country: "Test",
    /*type:[
        {
            waveType:"Test",
            bottomType:"Test",
        }
    ],*/
    location: {
        //type:"Point",
        coordinates: ["12", "56"]
    },
    orientation: ["Test"],
    optimalConditions: [
        {
            wind: {
                strength: "Test",
                orientation: "Test"
            },
            swell: {
                size: "Tets",
                period: "Tets",
                orientation: "Tets"
            }
        }
    ],
    sessions: ["Test", "Test2"],
    creationDate: Date.now(),
});
exports.emptyWaveType = emptyWaveType;
