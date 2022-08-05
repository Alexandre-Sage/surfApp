"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dupUserObject = exports.userObject = void 0;
const userObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "TestOne",
    email: "test@testOne",
    phone: "0606654654",
    password: "test",
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
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.userObject = userObject;
const dupUserObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "TestOne",
    email: "test@testOne",
    phone: "0606654654",
    password: "test",
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
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.dupUserObject = dupUserObject;
