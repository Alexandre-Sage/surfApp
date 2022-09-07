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
const fetchOneEntries_1 = __importDefault(require("../../../mongo/modules/fetchOneEntries"));
const sessionChecking_1 = __importDefault(require("../../modules/sessionManagement/sessionChecking"));
const spots_1 = require("../../../mongo/spots/spots");
const router = express_1.default.Router();
router.get("/getSpot/:spotId", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = req.session;
        console.log(req.params);
        const { spotId } = req.params;
        const researchObject = {
            userId: session.userId,
            _id: spotId
        };
        try {
            yield (0, sessionChecking_1.default)(req, session);
            const spotInfo = yield (0, fetchOneEntries_1.default)(spots_1.Spot, researchObject);
            res.status(200).json({
                spotInfo,
                error: false
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
