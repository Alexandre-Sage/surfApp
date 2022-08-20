"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userPictureUpload_1 = __importDefault(require("./picture/userPictureUpload"));
const userProfilPicture_1 = __importDefault(require("./picture/userProfilPicture"));
const profilHeader_1 = __importDefault(require("./profilHeader"));
const router = express_1.default.Router();
router.use(profilHeader_1.default);
router.use(userProfilPicture_1.default);
router.use(userPictureUpload_1.default);
exports.default = router;
