"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.addUser = exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    location: { type: String, required: true },
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    userName: { type: String, required: true, unique: true, index: true, dropDups: false },
    email: { type: String, required: true, unique: true, index: true, dropDups: false },
    phone: { type: String, required: true, unique: true, index: true, dropDups: false },
    picture: [
        {
            path: { type: String, required: false },
            place: { type: String, required: false },
            uploadDate: { type: Date, required: false }
        }
    ],
    creationDate: { type: Date, default: Date.now, required: true },
    lastConnection: { type: Date, default: Date.now, required: true },
});
exports.UserSchema = UserSchema;
const User = (0, mongoose_1.model)("User", UserSchema);
exports.User = User;
User.createIndexes();
const addUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, mongoose_1.connect)("mongodb://localhost:27017/surfApp", {
        autoIndex: true,
    })
        .then((conn) => newUser.save(conn))
        .then(() => true)
        .catch((err) => err)
        .finally(() => (0, mongoose_1.disconnect)());
});
exports.addUser = addUser;
const user = new User({
    location: "Test",
    name: "Test",
    firstName: "Test",
    userName: "Testddqsddqqsqsd",
    email: "test@testsdqsdqsdqsdqs",
    phone: "0606659654",
    picture: [{ path: "../../../", place: "here", uploadDate: Date.now() }, { path: "../../../", place: "here", uploadDate: Date.now() }],
    creationDate: Date.now(),
    lastConnection: Date.now()
});
const { log } = console;
addUser(user)
    .then((res) => log(res))
    .catch((err) => log(err));
