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
const users_1 = __importDefault(require("../../../../mongo/users/users"));
const fetchOneEntries_1 = __importDefault(require("../../../../mongo/modules/fetchOneEntries"));
exports.default = describe("1) SHOULD ADD SPOT TO DATABSE", function () {
    before(() => __awaiter(this, void 0, void 0, function* () {
        const researchObject = { userName: "TestOne" };
        const fieldObject = { _id: 1 };
        try {
            const userId = yield (0, fetchOneEntries_1.default)(users_1.default, researchObject, fieldObject);
            const newSession = {
                userId: userId._id,
                date: new Date().toUTCString(),
                spotId: "test for now",
                startTime: new Date().toUTCString(),
                endTime: new Date().toUTCString(),
                totalTime: new Date().toUTCString(),
                swell: {
                    size: "2m",
                    period: "12s",
                    orientation: "NO"
                },
                wind: {
                    strength: "12knot",
                    orientation: "E"
                },
                comment: "Something to say about"
            };
            this.ctx.session = newSession;
        }
        catch (err) {
            throw err;
        }
        ;
    }));
    it("Should add spot to database with sucess", () => __awaiter(this, void 0, void 0, function* () {
        //console.log(this.ctx.session)
        const chai = (0, globalsTestVar_1.chaiAgent)();
        const agentObj = { agent: chai.request.agent(server_1.default) };
        const credentials = { email: "test@testOne.com", password: "test" };
        const sendBody = this.ctx.session;
        const message = "User was sucessfully created";
        const responseProperty = [
            { propertyName: "message", propertyValue: message },
            { propertyName: "error", propertyValue: false }
        ];
        const assertBodyObj = {
            redirectsLength: 0,
            propertyArray: responseProperty
        };
        try {
            yield (0, httpModule_test_1.testGetRoute)(agentObj, "/csrf", globalsTestVar_1.jsonHeader200ObjCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
            yield (0, httpModule_test_1.testPostRoute)(agentObj, "/login", credentials, globalsTestVar_1.jsonHeader200ObjCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
            yield (0, httpModule_test_1.testGetRoute)(agentObj, "/csrf", globalsTestVar_1.jsonHeader200ObjCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
            (0, httpModule_test_1.testPostRoute)(agentObj, "/session/createSession", sendBody, globalsTestVar_1.jsonHeader200ObjectNoCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }));
});
