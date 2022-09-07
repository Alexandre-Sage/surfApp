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
const spots_1 = require("../../../mongo/spots/spots");
const sessionChecking_1 = __importDefault(require("../../modules/sessionManagement/sessionChecking"));
const fetchAllDocument_1 = __importDefault(require("../../../mongo/modules/fetchAllDocument"));
const router = express_1.default.Router();
router.get("/getAllSpots", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = req.session;
        const researchObject = { userId: session.userId };
        const fieldObject = { _id: 1, spotName: 1, location: 1 };
        try {
            yield (0, sessionChecking_1.default)(req, session);
            const spotInfo = yield (0, fetchAllDocument_1.default)(spots_1.Spot, researchObject, fieldObject);
            res.status(200).json(spotInfo);
        }
        catch (error) {
            res.status(error.httpStatus).json({
                message: error.message,
                error: true
            });
        }
        ;
    });
});
exports.default = router;
