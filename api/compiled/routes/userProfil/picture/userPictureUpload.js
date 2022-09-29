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
const imageStorage_1 = require("../../modules/upload/imageStorage");
const addPicture_1 = __importDefault(require("./pictureModules/addPicture"));
const users_1 = __importDefault(require("../../../mongo/users/users"));
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
const { log, table, error } = console;
const upload = imageStorage_1.imageStorage.single("image");
const uploadTest = (0, multer_1.default)({ dest: "./", limits: { fileSize: 1000000000000 } });
/**/
const stringModification = (string, splitCharactere, spliceIndex, numberOfDelete, joinCharactere, replacement) => {
    const array = string ? string.split(splitCharactere) : undefined;
    if (replacement && array)
        array.splice(spliceIndex, numberOfDelete, replacement);
    else if (array && !replacement)
        array.splice(spliceIndex, numberOfDelete);
    else
        throw new Error("String modification function error");
    const newString = array.join(joinCharactere);
    return newString;
};
///////
/** */
router.post("/uploadPicture", imageStorage_1.imageStorage.single("image"), function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = req.session;
        const fileCopy = Object.assign({}, req.file);
        const { path, destination, originalname } = fileCopy;
        const dataBasePath = stringModification(path, "/", 0, 1, "/");
        const pictureObj = { path: `${dataBasePath}_compressed`, place: "test", date: Date.now() };
        try {
            yield (0, sessionChecking_1.default)(req, session);
            yield (0, addPicture_1.default)(session, users_1.default, pictureObj);
            (0, imageStorage_1.compressImage)(`${path}`);
            return res.status(200).json({
                message: "You're image was successfully uploaded.",
                error: false
            });
        }
        catch (error) {
            return res.status(error.httpStatus).json({
                message: error.message,
                error: true
            });
        }
        ;
    });
});
exports.default = router;
/*
    try {
        const input = fs.createReadStream(`${path}`);
        const output = fs.createWriteStream(`${destination}/${session.userName}.gz`);

        const zipper = archiver("tar", {
            gzip: true,
            store: true,
            zlib: { level: 9 }
        });
        zipper.pipe(output)
        console.log(zipper)
        zipper.append(input, { name: `${originalname}` });
        await zipper.finalize()

    } catch (error) {
        console.log(error)
    }
    */ 
