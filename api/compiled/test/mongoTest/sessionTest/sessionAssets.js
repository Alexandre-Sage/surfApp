"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingWind = exports.missingSwell = exports.missingUserName = exports.missingSpot = exports.missingDate = exports.newSession = void 0;
const sessions_1 = require("../../../mongo/sessions/sessions");
const newSession = new sessions_1.Session({
    date: Date.now(),
    spot: "Test",
    userName: "Test",
    startTime: Date.now(),
    endTime: Date.now(),
    totalTime: Date.now(),
    swell: {
        size: "Test",
        period: "Test",
        orientation: "Test"
    },
    wind: {
        strength: "Test",
        orientation: "Test"
    },
    comment: "Test"
});
exports.newSession = newSession;
const missingDate = new sessions_1.Session({
    //date:Date.now(),
    spot: "Test",
    userName: "Test",
    startTime: Date.now(),
    endTime: Date.now(),
    totalTime: Date.now(),
    swell: {
        size: "Test",
        period: "Test",
        orientation: "Test"
    },
    wind: {
        strength: "Test",
        orientation: "Test"
    },
    comment: "Test"
});
exports.missingDate = missingDate;
const missingSpot = new sessions_1.Session({
    date: Date.now(),
    //spot:"Test",
    userName: "Test",
    startTime: Date.now(),
    endTime: Date.now(),
    totalTime: Date.now(),
    swell: {
        size: "Test",
        period: "Test",
        orientation: "Test"
    },
    wind: {
        strength: "Test",
        orientation: "Test"
    },
    comment: "Test"
});
exports.missingSpot = missingSpot;
const missingUserName = new sessions_1.Session({
    date: Date.now(),
    spot: "Test",
    userName: "Test",
    startTime: Date.now(),
    endTime: Date.now(),
    totalTime: Date.now(),
    swell: {
        size: "Test",
        period: "Test",
        orientation: "Test"
    },
    wind: {
        strength: "Test",
        orientation: "Test"
    },
    comment: "Test"
});
exports.missingUserName = missingUserName;
const missingSwell = new sessions_1.Session({
    date: Date.now(),
    spot: "Test",
    userName: "Test",
    startTime: Date.now(),
    endTime: Date.now(),
    totalTime: Date.now(),
    /*swell:{
        size:"Test",
        period:"Test",
        orientation:"Test"
    },*/
    wind: {
        strength: "Test",
        orientation: "Test"
    },
    comment: "Test"
});
exports.missingSwell = missingSwell;
const missingWind = new sessions_1.Session({
    date: Date.now(),
    spot: "Test",
    userName: "Test",
    startTime: Date.now(),
    endTime: Date.now(),
    totalTime: Date.now(),
    swell: {
        size: "Test",
        period: "Test",
        orientation: "Test"
    },
    /*wind:{
        strength:"Test",
        orientation:"Test"
    },*/
    comment: "Test"
});
exports.missingWind = missingWind;
