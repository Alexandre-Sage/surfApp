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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const errorClass_1 = __importDefault(require("../../modules/errors/errorClass"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const UserSchema = new mongoose_1.Schema({
    location: { type: String, required: true },
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    userName: { type: String, required: true, unique: true, index: true, dropDups: false },
    email: { type: String, required: true, unique: true, index: true, dropDups: false },
    phone: { type: String, required: true, unique: true, index: true, dropDups: false },
    password: { type: String, required: true },
    salt: { type: String, required: true },
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
/**
 * First User schema method hashPassword:
 * This function hash the new user password with SHA512 algorithm and add salt it.
 * @param password the password to hash has to be a string.
 */
UserSchema.methods.hashPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        this.salt = (0, crypto_1.randomBytes)(25).toString("hex");
        this.password = (0, crypto_1.pbkdf2Sync)(password, this.salt, 1000, 64, "sha512").toString("hex");
    });
};
/**
 * Second User schema method checkPassword.
 * Check if the provided string match the databse stored password.
 * @param password string provided as login password by the user.
 * @returns a promise that resolves with true if the password and the provided string match or
 * reject it with an error if they don't.
 */
UserSchema.methods.checkPassword = function (password) {
    const hashedPassword = (0, crypto_1.pbkdf2Sync)(password, this.salt, 1000, 64, "sha512").toString("hex");
    return new Promise((resolve, reject) => (this.password === hashedPassword ? resolve(true) : reject(new errorClass_1.default("Invalid password", 400))));
};
const User = (0, mongoose_1.model)("User", UserSchema);
(0, mongoose_1.connect)(`${process.env.MONGO_ATLAS}`, {
    autoIndex: true,
}).then(() => User.createIndexes())
    .catch(err => console.log(err))
    .finally(() => (0, mongoose_1.disconnect)());
exports.default = User;
