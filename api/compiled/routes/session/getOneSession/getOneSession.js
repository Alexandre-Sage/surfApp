"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/getOneSession", function (req, res) {
    try {
        res.status(200).json({});
    }
    catch (error) {
        res.status(666).json({});
    }
    ;
});
exports.default = router;
