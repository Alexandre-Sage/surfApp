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
const signUpAssets_1 = require("../signUpAssets");
//PROBLEME AVEC TOUT LES TEST
exports.default = describe("2.1) SHOULD RETURN DUPLICATE USERNAME ERROR", function () {
    it("Should post a new user and return error for duplicate userName", () => __awaiter(this, void 0, void 0, function* () {
        const chai = (0, globalsTestVar_1.chaiAgent)();
        const agentObj = { agent: chai.request.agent(server_1.default) };
        const sendBody = Object.assign({}, signUpAssets_1.userObject);
        const message = "The userName TestOne is already used.";
        const responseProperty = [
            { propertyName: "message", propertyValue: message },
            { propertyName: "error", propertyValue: true }
        ];
        const assertBodyObj = {
            redirectsLength: 0,
            propertyArray: responseProperty
        };
        try {
            yield (0, httpModule_test_1.testGetRoute)(agentObj, "/sign-up/csrf", globalsTestVar_1.jsonHeader200ObjCookie, globalsTestVar_1.noErrorObject, globalsTestVar_1.assertBodyNoRedirectObj);
            yield (0, httpModule_test_1.testPostRoute)(agentObj, "/sign-up", sendBody, globalsTestVar_1.jsonHeader400ObjectNoCookie, globalsTestVar_1.clientErrorObject, assertBodyObj);
        }
        catch (err) {
            throw err;
        }
    }));
});
