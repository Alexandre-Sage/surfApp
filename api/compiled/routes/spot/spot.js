"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const spotCreationRoute_1 = __importDefault(require("./spotCreation/spotCreationRoute"));
const getAllSpotRoute_1 = __importDefault(require("./getAllSpot/getAllSpotRoute"));
const getOneSpotRoute_1 = __importDefault(require("./getOneSpot/getOneSpotRoute"));
const router = express_1.default.Router();
router.use(spotCreationRoute_1.default);
router.use(getAllSpotRoute_1.default);
router.use(getOneSpotRoute_1.default);
exports.default = router;
