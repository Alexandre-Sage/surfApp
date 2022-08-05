"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sessionAssets_1 = require("../sessionAssets");
const addMongoEntries_1 = __importDefault(require("../../../../mongo/modules/addMongoEntries"));
const mongoValidationError_test_1 = __importDefault(require("../../modules/mongoValidationError.test"));
exports.default = describe("2.1) POST WITH EMPTY COUNTRY", function () {
    (0, mongoValidationError_test_1.default)(addMongoEntries_1.default, sessionAssets_1.missingDate, "date", "required", "It should return empty date");
});
