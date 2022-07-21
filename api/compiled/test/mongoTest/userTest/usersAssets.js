"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOne = void 0;
const users_1 = require("../../../mongo/users/users");
const userOne = new users_1.User({
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "TestOne",
    email: "test@testOne",
    phone: "0606654654",
    picture: [
        {
            path: "../../../",
            place: "here",
            uploadDate: Date.now()
        },
        {
            path: "../../../",
            place: "here", uploadDate: Date.now()
        }
    ],
    creationDate: Date.now(),
    lastConnection: Date.now()
});
exports.userOne = userOne;
