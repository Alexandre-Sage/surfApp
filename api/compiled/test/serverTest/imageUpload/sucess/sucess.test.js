"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../../../server"));
const httpModule_test_1 = require("../../testModules/httpModule.test");
const globalsTestVar_1 = require("../../globalsTestVar");
const filename = "image.jpg";
exports.default = describe("IMAGE UPLOAD", function () {
    it("should upload an image to the server and save path in database", () => __awaiter(this, void 0, void 0, function* () {
        const chai = (0, globalsTestVar_1.chaiAgent)();
        const agentObj = { agent: chai.request.agent(server_1.default) };
        const sendBody = { email: "test@testOne.com", password: "test" };
        const file = "test/serverTest/imageUpload/sucess/image.jpg";
        try {
            yield (0, httpModule_test_1.testGetRoute)(agentObj, "/csrf", globalsTestVar_1.jsonHeader200ObjCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
            yield (0, httpModule_test_1.testPostRoute)(agentObj, "/login", sendBody, globalsTestVar_1.jsonHeader200ObjCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
            yield (0, httpModule_test_1.testPostFileRoute)(agentObj, "/userProfil/uploadPicture", file, "refacto.jpg", globalsTestVar_1.jsonHeader200ObjectNoCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
        }
        catch (error) {
            throw error;
        }
    }));
});
