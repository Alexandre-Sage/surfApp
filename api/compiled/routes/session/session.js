"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createSession_1 = __importDefault(require("./createNewSession/createSession"));
const getAllSessions_1 = __importDefault(require("./getAllSessions/getAllSessions"));
const router = express_1.default.Router();
router.use(createSession_1.default);
router.use(getAllSessions_1.default);
exports.default = router;
