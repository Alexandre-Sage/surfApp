"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const spotAssets_1 = require("../spotAssets");
const addMongoEntries_1 = __importDefault(require("../../../../mongo/modules/addMongoEntries"));
const mongoValidationError_test_1 = __importDefault(require("../../modules/mongoValidationError.test"));
exports.default = describe("2.4) POST WITH EMPTY COUNTRY", function () {
    (0, mongoValidationError_test_1.default)(addMongoEntries_1.default, spotAssets_1.emptyCountry, "country", "required", "It should return empty country");
});