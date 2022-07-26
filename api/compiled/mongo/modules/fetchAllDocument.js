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
function fetchAllDocument(mongoSchema, researchObject, field, sortObject) {
    return __awaiter(this, void 0, void 0, function* () {
        const errorKey = `${Object.keys(researchObject)[0]}`;
        const errorMessage = `${Object.keys(researchObject)[0]}: ${researchObject[errorKey]} not found please retry`;
        try {
            yield (0, mongoose_1.connect)(`${process.env.MONGO_ATLAS}`, {
                autoIndex: true,
            });
            const document = yield mongoSchema.find(researchObject, field ? field : undefined).sort(sortObject ? sortObject : undefined);
            return new Promise((resolve, reject) => (document ? resolve(document) : reject(new errorClass_1.default(errorMessage, 400))));
        }
        catch (error) {
            console.error(error);
            return Promise.reject(new errorClass_1.default("Something wrong happened please retry ", 403));
        }
    });
}
exports.default = fetchAllDocument;
;
