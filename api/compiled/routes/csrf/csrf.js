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
const general_1 = require("../modules/cookies/general");
const csurf_1 = require("../modules/cookies/csurf");
const router = express_1.default.Router();
router.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = req.session;
        const csurfToken = (0, general_1.tokenGenerator)(50);
        const csrfName = "CSRF-TOKEN";
        const options = { httpOnly: false, signed: true, sameSite: false };
        yield (0, csurf_1.csurfCookieGenerator)(req, csurfToken, session);
        return res.status(200).cookie(csrfName, csurfToken, options).json({});
    });
});
exports.default = router;
