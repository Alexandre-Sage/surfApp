"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
chai_1.default.use(chai_http_1.default);
const { log, table } = console;
describe('APP TEST', () => {
    it("Should do everything", () => {
        log("nothing here for now");
    });
});
describe.only("MONGO TEST", () => {
    require("./mongoTest/userTest/users.test");
    /*describe("should do it",()=>{
        require("./mongoTest/users.test");
    })*/
});
