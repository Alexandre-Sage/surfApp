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
const express_1 = __importDefault(require("express"));
const fetchOneEntries_1 = __importDefault(require("../../mongo/modules/fetchOneEntries"));
const users_1 = __importDefault(require("../../mongo/users/users"));
const general_1 = require("../modules/cookies/general");
const sessionCreation_1 = require("../modules/sessionManagement/sessionCreation");
const csurf_1 = require("../modules/cookies/csurf");
const notEmpty_1 = __importDefault(require("../modules/dataValidation/notEmpty"));
const validation_1 = __importDefault(require("../modules/dataValidation/validation"));
//import {CookieOptions} from "../"
const router = express_1.default.Router();
const { log, table } = console;
/**
 * Login Router, handle the login form
 * @return If sucess return a resposne with a session cookie and create the session.
 * @return If invalid credentials return an error response
 */
router.post("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = req.session;
        const { email, password } = req.body;
        const researchObject = { email: email };
        try {
            yield (0, csurf_1.csurfChecking)(session, req);
            yield (0, notEmpty_1.default)(req.body);
            yield (0, validation_1.default)(req.body);
            const user = yield (0, fetchOneEntries_1.default)(users_1.default, researchObject);
            yield user.checkPassword(password);
            const sessionToken = (0, general_1.tokenGenerator)(75);
            const cookieOptions = { httpOnly: true, signed: true, sameSite: false, maxAge: 600000 };
            const cookieName = "SESSION-TOKEN";
            yield (0, sessionCreation_1.createSession)(session, sessionToken, user);
            session.save();
            log(session);
            return res.status(200).cookie(cookieName, sessionToken, cookieOptions).json({
                message: `Welcome back ${user.userName}!`,
                error: false
            });
        }
        catch (error) {
            //console.log(error)
            return res.status(error.httpStatus).json({
                message: error.message,
                error: true
            });
        }
        ;
    });
});
exports.default = router;
