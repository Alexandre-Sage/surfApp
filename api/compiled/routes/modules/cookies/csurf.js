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
exports.csurfChecking = exports.csurfCookieGenerator = void 0;
const errorClass_1 = __importDefault(require("../../../modules/errors/errorClass"));
const csurfCookieGenerator = (req, token) => __awaiter(void 0, void 0, void 0, function* () {
    req.session.csurfToken = token;
    return new Promise((resolve, reject) => {
        req.session.save((err) => err ? reject(err) : resolve(true));
    });
});
exports.csurfCookieGenerator = csurfCookieGenerator;
function csurfChecking(session, req) {
    return __awaiter(this, void 0, void 0, function* () {
        const error = new errorClass_1.default("Csurf cookie is not valid", 403);
        const requestCookie = req.signedCookies["CSRF-TOKEN"];
        const { csurfToken } = session;
        return new Promise((resolve, reject) => (csurfToken && requestCookie === session.csurfToken ? resolve(true) : reject(error)));
    });
}
exports.csurfChecking = csurfChecking;