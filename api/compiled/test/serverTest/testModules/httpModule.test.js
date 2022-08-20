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
exports.testPostFileRoute = exports.testPostRoute = exports.testGetRoute = void 0;
const assertionModule_test_1 = require("./assertionModule.test");
const fs_1 = __importDefault(require("fs"));
const { log } = console;
function testGetRoute(agentObj, path, assertHeaderObj, errorObject, assertBodyObj) {
    return __awaiter(this, void 0, void 0, function* () {
        yield agentObj.agent.get(path)
            .then((res) => {
            const { contentType, status, origin, cookie } = assertHeaderObj;
            const { serverError, clientError, badRequest } = errorObject;
            (0, assertionModule_test_1.assertHeader)(res, assertHeaderObj);
            (0, assertionModule_test_1.assertError)(res, errorObject);
            (0, assertionModule_test_1.assertBody)(res, assertBodyObj);
        }).catch((err) => { throw err; });
    });
}
exports.testGetRoute = testGetRoute;
;
function testPostRoute(agentObj, url, sendBody, assertHeaderObj, errorObject, assertBodyObj) {
    return __awaiter(this, void 0, void 0, function* () {
        agentObj.agent.post(url);
        return yield agentObj.agent.post(url)
            .send(sendBody)
            .then((res) => {
            //log(res)
            const { contentType, status, origin, cookie } = assertHeaderObj;
            const { serverError, clientError, badRequest } = errorObject;
            (0, assertionModule_test_1.assertHeader)(res, assertHeaderObj);
            (0, assertionModule_test_1.assertError)(res, errorObject);
            (0, assertionModule_test_1.assertBody)(res, assertBodyObj);
        }).catch((err) => { throw err; });
    });
}
exports.testPostRoute = testPostRoute;
function testPostFileRoute(agentObj, url, filePath, fileName, assertHeaderObj, errorObject, assertBodyObj) {
    return __awaiter(this, void 0, void 0, function* () {
        const boundary = Math.random();
        try {
            const res = yield agentObj.agent.post(url)
                .set('Content-Type', 'multipart/form-data; boundary=' + boundary)
                .attach("image", fs_1.default.readFileSync(filePath), fileName);
            (0, assertionModule_test_1.assertHeader)(res, assertHeaderObj);
            (0, assertionModule_test_1.assertError)(res, errorObject);
            (0, assertionModule_test_1.assertBody)(res, assertBodyObj);
            //console.log(res)
        }
        catch (error) {
            throw error;
        }
    });
}
exports.testPostFileRoute = testPostFileRoute;
;
