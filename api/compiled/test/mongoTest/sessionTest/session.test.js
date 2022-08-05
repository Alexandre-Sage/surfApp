"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sessionAssets_1 = require("./sessionAssets");
const addMongoEntries_1 = __importDefault(require("../../../mongo/modules/addMongoEntries"));
const addEntryToDataBase_test_1 = __importDefault(require("../modules/addEntryToDataBase.test"));
exports.default = describe("1) ADD SPOT TO DB WITHOUT ERROR", function () {
    (0, addEntryToDataBase_test_1.default)(addMongoEntries_1.default, sessionAssets_1.newSession, "session");
});
