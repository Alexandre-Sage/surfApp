"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersAssets_1 = require("../usersAssets");
const addMongoEntries_1 = __importDefault(require("../../../../mongo/modules/addMongoEntries"));
const mongoError_test_1 = __importDefault(require("../../modules/mongoError.test"));
exports.default = describe("2.3) POST WITH DUPLICATE PHONE", function () {
    (0, mongoError_test_1.default)(addMongoEntries_1.default, usersAssets_1.phoneDup, "phone", 11000, "It should return duplicate phone");
});
