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
const notEmpty_1 = __importDefault(require("../modules/dataValidation/notEmpty"));
const addMongoEntries_1 = __importDefault(require("../../mongo/modules/addMongoEntries"));
const createUser_1 = __importDefault(require("./modules/createUser"));
const csurf_1 = require("../modules/cookies/csurf");
const router = express_1.default.Router();
router.post("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const session = req.session;
        const bodyCopy = Object.assign({}, req.body);
        delete bodyCopy.picture;
        const createUserPromiseArray = [(0, csurf_1.csurfChecking)(session, req), (0, notEmpty_1.default)(bodyCopy), (0, createUser_1.default)(req.body)];
        yield Promise.all(createUserPromiseArray)
            .then((resolved) => (0, addMongoEntries_1.default)(resolved[2]))
            .then(() => res.status(200).json({
            message: "User was sucessfully created",
            error: false
        }))
            .catch((err) => res.status(err.httpStatus).json({
            message: err.message,
            error: true
        }));
    });
});
exports.default = router;
