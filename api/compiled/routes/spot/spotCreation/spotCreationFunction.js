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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addMongoEntries_1 = __importDefault(require("../../../mongo/modules/addMongoEntries"));
const notEmpty_1 = __importDefault(require("../../modules/dataValidation/notEmpty"));
const spots_1 = require("../../../mongo/spots/spots");
function spotCreation(requestBody) {
    return __awaiter(this, void 0, void 0, function* () {
        const { location, type, orientation } = requestBody, bodyCopy = __rest(requestBody, ["location", "type", "orientation"]);
        try {
            //await notEmptyCheck(location)
            yield (0, notEmpty_1.default)(bodyCopy);
            const newSpot = new spots_1.Spot(requestBody);
            const document = yield (0, addMongoEntries_1.default)(newSpot);
            return document;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.default = spotCreation;
;
