"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneDup = exports.emailDup = exports.userNameDup = exports.userOne = exports.missingFirstName = exports.missingPassword = exports.missingName = exports.missingEmail = exports.missingPhone = void 0;
const users_1 = require("../../../mongo/users/users");
const userOne = new users_1.User({
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
    creationDate: Date.now(),
    lastConnection: Date.now()
});
exports.userOne = userOne;
const userNameDup = new users_1.User({
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "TestOne",
    email: "test@testTwo",
    phone: "065687456",
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
    creationDate: Date.now(),
    lastConnection: Date.now()
});
exports.userNameDup = userNameDup;
const emailDup = new users_1.User({
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "TestTwo",
    email: "test@testOne",
    phone: "0606654645",
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
    creationDate: Date.now(),
    lastConnection: Date.now()
});
exports.emailDup = emailDup;
const phoneDup = new users_1.User({
    location: "TestOne",
    name: "TestOne",
    firstName: "TestTwo",
    userName: "TestTwo",
    email: "test@testTwo",
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
    creationDate: Date.now(),
    lastConnection: Date.now()
});
exports.phoneDup = phoneDup;
const missingFirstName = new users_1.User({
    location: "TestOne",
    name: "TestOne",
    //firstName:"TestTwo",
    userName: "TestTwo",
    email: "test@testTwo",
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
    creationDate: Date.now(),
    lastConnection: Date.now()
});
exports.missingFirstName = missingFirstName;
const missingName = new users_1.User({
    location: "TestOne",
    //name:"TestOne",
    firstName: "TestTwo",
    userName: "TestTwo",
    email: "test@testTwo",
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
    creationDate: Date.now(),
    lastConnection: Date.now()
});
exports.missingName = missingName;
const missingEmail = new users_1.User({
    location: "TestOne",
    name: "TestOne",
    firstName: "TestTwo",
    userName: "TestTwo",
    //email: "test@testTwo",
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
    creationDate: Date.now(),
    lastConnection: Date.now()
});
exports.missingEmail = missingEmail;
const missingPhone = new users_1.User({
    location: "TestOne",
    name: "TestOne",
    firstName: "TestTwo",
    userName: "TestTwo",
    email: "test@testTwo",
    //phone:"0606654654",
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
    creationDate: Date.now(),
    lastConnection: Date.now()
});
exports.missingPhone = missingPhone;
const missingPassword = new users_1.User({
    location: "TestOne",
    name: "TestOne",
    firstName: "TestTwo",
    userName: "TestTwo",
    email: "test@testTwo",
    phone: "0606654654",
    //password:"test",
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
exports.missingPassword = missingPassword;
