"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../../../server"));
const httpModule_test_1 = require("../../testModules/httpModule.test");
const globalsTestVar_1 = require("../../globalsTestVar");
exports.default = describe("1) GET THE COOKIE FOR SIGN UP", function () {
    const chai = (0, globalsTestVar_1.chaiAgent)();
    it("Should get a cookie", (done) => {
        const agentObj = { agent: chai.request.agent(server_1.default) };
        (0, httpModule_test_1.testGetRoute)(agentObj, "/csrf", globalsTestVar_1.jsonHeader200ObjCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj)
            .then(() => done())
            .catch((err) => done(err));
    });
});
