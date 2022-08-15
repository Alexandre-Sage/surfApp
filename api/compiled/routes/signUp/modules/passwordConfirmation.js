"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorClass_1 = __importDefault(require("../../../modules/errors/errorClass"));
function passwordConfirmation(password, passwordConfirmation) {
    const error = new errorClass_1.default("Password confirmation doesnt match", 400);
    return new Promise((resolve, reject) => {
        password === passwordConfirmation ? resolve(true) : reject(error);
    });
}
exports.default = passwordConfirmation;
;
