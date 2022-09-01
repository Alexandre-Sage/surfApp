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
const sessionChecking_1 = __importDefault(require("../../modules/sessionManagement/sessionChecking"));
const csurf_1 = require("../../modules/cookies/csurf");
const spotCreationFunction_1 = __importDefault(require("./spotCreationFunction"));
const router = express_1.default.Router();
router.post("/newSpot", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = req.session;
        try {
            yield (0, csurf_1.csurfChecking)(session, req);
            yield (0, sessionChecking_1.default)(req, session);
            yield (0, spotCreationFunction_1.default)(req.body);
            return res.status(200).json({
                message: "Spot added with sucess",
                error: false
            });
        }
        catch (error) {
            console.log(error);
            return res.status(error.httpStatus).json({
                message: error.message,
                error: true
            });
        }
        ;
    });
});
exports.default = router;
