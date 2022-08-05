"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorClass_1 = __importDefault(require("../../../modules/errors/errorClass"));
function sessionChecking(req, session) {
    const error = new errorClass_1.default("Something wrong happened please retry.", 403);
    return new Promise((resolve, reject) => (session.sessionToken && req.signedCookies["SESSION-TOKEN"] === session.sessionToken ? resolve(true) : reject(error)));
}
exports.default = sessionChecking;
