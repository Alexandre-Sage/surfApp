import server from "../../../server.js";

import chai, { request, assert, should, expect } from "chai";
import chaiHttp from "chai-http"
import { userObject } from "../signUpAssets.js";

//import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
//import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";

chai.use(chaiHttp)

export default describe("1) SIGN UP ROUTES", function () {
    it("Should handle posted sign up from and create a new user", async () => {
        const agent = chai.request.agent(server);
        try {
            const response = await agent.post("/signUp").send(userObject)
            expect(response).to.have.property("status").eql(200);
        } catch (error: any) {
            throw error
        };
    });
});




//export default describe("2) POST THE SIGN UP FORM", function () {
//    it("Should post the sign-up form and crate new user", async () => {
//        const chai = chaiAgent();
//        const agentObj = { agent: chai.request.agent(server) };
//        const sendBody = { ...userObject };
//        const message = "User was sucessfully created";
//        const responseProperty = [
//            { propertyName: "message", propertyValue: message },
//            { propertyName: "error", propertyValue: false }
//        ];
//        const assertBodyObj = {
//            redirectsLength: 0,
//            propertyArray: responseProperty
//        };
//        try {
//            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
//            await testPostRoute(agentObj, "/sign-up", sendBody, jsonHeader200ObjectNoCookie, noErrorObject, assertBodyObj)
//        } catch (err) {
//            throw err
//        }
//    });
//});
