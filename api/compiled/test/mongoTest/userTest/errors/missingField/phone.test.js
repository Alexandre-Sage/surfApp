"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersAssets_1 = require("../../usersAssets");
const addMongoEntries_1 = __importDefault(require("../../../../../mongo/modules/addMongoEntries"));
const mongoValidationError_test_1 = __importDefault(require("../../../modules/mongoValidationError.test"));
exports.default = describe("2.7) POST WITH EMPTY PHONE", function () {
    (0, mongoValidationError_test_1.default)(addMongoEntries_1.default, usersAssets_1.missingPhone, "phone", "required", "It should return empty Phone");
});
