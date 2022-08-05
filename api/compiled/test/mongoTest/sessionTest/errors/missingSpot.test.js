"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sessionAssets_1 = require("../sessionAssets");
const addMongoEntries_1 = __importDefault(require("../../../../mongo/modules/addMongoEntries"));
const mongoValidationError_test_1 = __importDefault(require("../../modules/mongoValidationError.test"));
exports.default = describe("2.2) POST WITH EMPTY SPOT NAME", function () {
    (0, mongoValidationError_test_1.default)(addMongoEntries_1.default, sessionAssets_1.missingSpot, "spot", "required", "It should return empty spot");
});
