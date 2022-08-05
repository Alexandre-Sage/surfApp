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
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../../mongo/users/users");
const mongoose_1 = require("mongoose");
///////////////
exports.default = describe("I) USER SCHEMA TEST", function () {
    before(() => __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)(`${process.env.MONGO_DB}`)
            .then(() => users_1.User.deleteMany())
            .catch(err => console.log(err))
            .finally(() => (0, mongoose_1.disconnect)());
    }));
    describe("1) CREATE NEW USER", function () {
        require("./users.test");
    });
    describe("2) USER CREATION ERROR", function () {
        require("./errors/userNameError.test");
        require("./errors/emailError.test");
        require("./errors/phoneError.test");
        require("./errors/missingField/firstName.test");
        require("./errors/missingField/email.test");
        require("./errors/missingField/name.test");
        require("./errors/missingField/phone.test");
        require("./errors/missingField/password.test");
    });
});
