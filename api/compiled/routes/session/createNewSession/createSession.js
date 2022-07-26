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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addMongoEntries_1 = __importDefault(require("../../../mongo/modules/addMongoEntries"));
const sessions_1 = require("../../../mongo/sessions/sessions");
const notEmpty_1 = __importDefault(require("../../modules/dataValidation/notEmpty"));
const router = express_1.default.Router();
router.post("/createSession", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = req.session;
        const _a = req.body, { swell, wind } = _a, bodyCopy = __rest(_a, ["swell", "wind"]);
        try {
            const promiseArray = [
                yield (0, notEmpty_1.default)(bodyCopy),
                yield (0, notEmpty_1.default)(swell),
                yield (0, notEmpty_1.default)(wind)
            ];
            const bodyCheck = yield Promise.all(promiseArray);
            const newSession = new sessions_1.UserSession(req.body);
            const addSessionToDatabase = yield (0, addMongoEntries_1.default)(newSession);
            res.status(200).json({
                message: "Session added successfully"
            });
        }
        catch (error) {
            console.log(error);
            res.status(error.httpStatus).json({
                message: error.message,
                error: true
            });
        }
        ;
    });
});
exports.default = router;
