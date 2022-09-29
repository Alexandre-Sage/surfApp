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
exports.compressImage = exports.imageStorage = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const storage = multer_1.default.diskStorage({
    destination(req, file, callBack) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName } = req.session;
            const folder = `./src/images/usersImages/${userName}`;
            //AREMPLACER PAR fs.stat
            fs_1.default.exists(folder, (existing) => __awaiter(this, void 0, void 0, function* () {
                if (!existing) {
                    fs_1.default.mkdir(folder, (error) => console.log(error) /*callBack(error, "/tmp")*/);
                }
                ;
                return yield callBack(null, folder);
            }));
        });
    },
    filename(req, file, callBack) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName } = req.session;
            const uniqueSuffix = `${Date.now()}_${userName}`;
            return yield callBack(null, file.originalname + '-' + uniqueSuffix);
        });
    },
});
const maxSize = 200022 * 200022 * 2;
function compressImage(path) {
    return (0, sharp_1.default)(path).resize({
        width: 1000,
        height: 1000,
        fit: "cover",
    }).jpeg().toFile(`${path}_compressed`, (err, res) => res ? fs_1.default.rm(path, () => { }) : err);
}
exports.compressImage = compressImage;
;
const imageStorage = (0, multer_1.default)({ storage: storage, limits: { fileSize: maxSize } });
exports.imageStorage = imageStorage;
