"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differentPasswordObject = exports.missingPasswordObject = exports.missingEmailObject = exports.missingPhoneObject = exports.missingUserNameObject = exports.invalidPhoneObject = exports.invalidMailObject = exports.dupPhoneObject = exports.dupMailObject = exports.dupUserObject = exports.userObject = void 0;
const userObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "TestOne",
    email: "test@testOne.com",
    phone: "0606654654",
    password: "test",
    confirmPassword: "test",
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
    confirmPassword: "test",
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.dupUserObject = dupUserObject;
const dupMailObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "TestTwo",
    email: "test@testOne.com",
    phone: "0606654654",
    password: "test",
    confirmPassword: "test",
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.dupMailObject = dupMailObject;
const dupPhoneObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "TestTwo",
    email: "test@testTwo.com",
    phone: "0606654654",
    password: "test",
    confirmPassword: "test",
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.dupPhoneObject = dupPhoneObject;
const invalidMailObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "TestTwo",
    email: "test",
    phone: "0606654654",
    password: "test",
    confirmPassword: "test",
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.invalidMailObject = invalidMailObject;
const invalidPhoneObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "TestTwo",
    email: "test@test.com",
    phone: "dqsmdlqùsdlùqdl",
    password: "test",
    confirmPassword: "test",
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.invalidPhoneObject = invalidPhoneObject;
const missingUserNameObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "",
    email: "test@test.com",
    phone: "dqsmdlqùsdlùqdl",
    password: "test",
    confirmPassword: "test",
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.missingUserNameObject = missingUserNameObject;
const missingPhoneObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "dqsdqdsqs",
    email: "test@test.com",
    phone: "",
    password: "test",
    confirmPassword: "test",
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.missingPhoneObject = missingPhoneObject;
const missingEmailObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "dqsdqdsqs",
    email: "",
    phone: "0606060606",
    password: "test",
    confirmPassword: "test",
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.missingEmailObject = missingEmailObject;
const missingPasswordObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "dqsdqdsqs",
    email: "test@test.com",
    phone: "0606060606",
    password: "",
    confirmPassword: "test",
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.missingPasswordObject = missingPasswordObject;
const differentPasswordObject = {
    location: "TestOne",
    name: "TestOne",
    firstName: "TestOne",
    userName: "dqsdqdsqs",
    email: "test@test.com",
    phone: "0606060606",
    password: "test",
    confirmPassword: "testssssssss",
    creationDate: new Date().toUTCString(),
    lastConnection: new Date().toUTCString()
};
exports.differentPasswordObject = differentPasswordObject;
