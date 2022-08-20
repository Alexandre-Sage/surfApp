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
const users_1 = __importDefault(require("../../../mongo/users/users"));
const mongoose_1 = require("mongoose");
exports.default = describe("I) SIGN-UP ROUTES TEST", function () {
    before(() => __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)(`${process.env.MONGO_ATLAS}`, {
            autoIndex: true,
        }).then(() => users_1.default.deleteMany())
            .then((res) => res)
            .catch(err => console.error(err));
    }));
    after(() => (0, mongoose_1.disconnect)());
    require("./sucess/getCookie.test");
    require("./sucess/signUpSucess.test");
    require("./errors/errorHighOrder.test");
    //require();
    //require();
});