"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersAssets_1 = require("./usersAssets");
const addMongoEntries_1 = __importDefault(require("../../../mongo/modules/addMongoEntries"));
const addEntryToDataBase_test_1 = __importDefault(require("../modules/addEntryToDataBase.test"));
exports.default = describe("1.1) ADD USER TO DB WITHOUT ERROR", function () {
    (0, addEntryToDataBase_test_1.default)(addMongoEntries_1.default, usersAssets_1.userOne, "user");
});
