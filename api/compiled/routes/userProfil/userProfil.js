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
const sessionChecking_1 = __importDefault(require("../modules/sessionManagement/sessionChecking"));
const fetchOneEntries_1 = __importDefault(require("../../mongo/modules/fetchOneEntries"));
const users_1 = __importDefault(require("../../mongo/users/users"));
const picture_1 = __importDefault(require("./picture/picture"));
const router = express_1.default.Router();
const headerFieldObject = { userName: 1, firstName: 1, name: 1, location: 1, creationDate: 1, _id: 0 };
const pictureFieldObject = { picture: 1 };
function userProfilChunks(routeName, fieldObject) {
    return router.get(`/${routeName}`, function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = req.session;
            const researchObject = { _id: session.userId };
            try {
                yield (0, sessionChecking_1.default)(req, session);
                const user = yield (0, fetchOneEntries_1.default)(users_1.default, researchObject, fieldObject);
                return res.status(200).json({
                    userInfo: user,
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
}
;
userProfilChunks("header", headerFieldObject);
userProfilChunks("picture", pictureFieldObject);
router.use(picture_1.default);
exports.default = router;
