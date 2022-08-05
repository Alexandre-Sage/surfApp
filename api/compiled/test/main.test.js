"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { log, table } = console;
describe.only('SERVER API', () => {
    require("./serverTest/serverHighOrder.test");
});
describe("DATABASE", () => {
    //require("./mongoTest/mongoTestHighOrder");
});
