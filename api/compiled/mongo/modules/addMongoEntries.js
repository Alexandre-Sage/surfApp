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
const mongoose_1 = require("mongoose");
const errorClass_1 = __importDefault(require("../../modules/errors/errorClass"));
const { log } = console;
function mongoErrorHandling(error, reject) {
    switch (error.code) {
        case 11000:
            const fieldValue = Object.entries(error.keyValue)[0];
            const ReturnedError = new errorClass_1.default(`The ${fieldValue[0]} ${fieldValue[1]} is already used.`, 400);
            reject(ReturnedError);
            break;
    }
    ;
}
;
function addMongoEntries(mongoSchema) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)(`${process.env.MONGO_ATLAS}`, {
            autoIndex: true,
        });
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            return (mongoSchema.save((error, documentSaved) => {
                if (error && error.name === "MongoServerError") {
                    //log("mdb", err)
                    mongoErrorHandling(error, reject);
                }
                else if (documentSaved) {
                    resolve(true);
                }
                ;
            }));
        })).then(() => (0, mongoose_1.disconnect)());
    });
}
exports.default = addMongoEntries;
