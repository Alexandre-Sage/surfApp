"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import server from "../server"
//const server=express();
const router = express_1.default.Router();
/*DEV*/
const { log, table } = console;
router.get("/csrf", (req, res) => {
    res.json({
        message: "OK"
    });
});
exports.default = router;
