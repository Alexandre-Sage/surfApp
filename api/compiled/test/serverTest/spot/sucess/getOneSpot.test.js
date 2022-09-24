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
const fetchOneEntries_1 = __importDefault(require("../../../../mongo/modules/fetchOneEntries"));
const users_1 = __importDefault(require("../../../../mongo/users/users"));
const spots_1 = require("../../../../mongo/spots/spots");
exports.default = describe("3) SHOULD GET ONE USER SPOTS", function () {
    before(() => __awaiter(this, void 0, void 0, function* () {
        const researchObjectUser = { userName: "TestOne" };
        const researchObjectSpot = { spotName: "Fuck" };
        const fieldObject = { _id: 1 };
        try {
            const userId = yield (0, fetchOneEntries_1.default)(users_1.default, researchObjectUser, fieldObject);
            const spot = yield (0, fetchOneEntries_1.default)(spots_1.Spot, researchObjectSpot, fieldObject);
            const spotId = spot._id;
            //console.log(userId)
            this.ctx.spotId = spotId;
        }
        catch (err) {
            console.log(err);
        }
        ;
    }));
    it("Should log and get user profil header", () => __awaiter(this, void 0, void 0, function* () {
        const chai = (0, globalsTestVar_1.chaiAgent)();
        const agentObj = { agent: chai.request.agent(server_1.default) };
        const sendBody = { email: "test@testOne.com", password: "test" };
        /*const responseProperty = [
            { propertyName: "userInfo", propertyValue: fuck },
            { propertyName: "error", propertyValue: false }
        ];*/
        /*const assertBodyObj = {
            redirectsLength: 0,
            propertyArray: responseProperty
        };*/
        try {
            yield (0, httpModule_test_1.testGetRoute)(agentObj, "/csrf", globalsTestVar_1.jsonHeader200ObjCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
            yield (0, httpModule_test_1.testPostRoute)(agentObj, "/login", sendBody, globalsTestVar_1.jsonHeader200ObjCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
            yield (0, httpModule_test_1.testGetRoute)(agentObj, `/spot/getSpot/${this.ctx.spotId}`, globalsTestVar_1.jsonHeader200ObjectNoCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
            agentObj.agent.close();
        }
        catch (error) {
            agentObj.agent.close();
            throw error;
        }
        ;
    }));
});
