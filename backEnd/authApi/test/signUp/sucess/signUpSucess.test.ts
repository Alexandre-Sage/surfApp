import server from "../../../server.js";

import chai, { request, assert, should, expect } from "chai";
import chaiHttp from "chai-http"
import { userObject } from "../signUpAssets.js";

chai.use(chaiHttp)
export default describe("1) SIGN UP ROUTES", function () {
    it("Should handle posted sign up from and create a new user", async () => {
        const agent = chai.request.agent(server);
        const responseMessage="User was sucessfully created";
        const contentType='application/json; charset=utf-8';
        const contentLength= '56';
        try {
            const response = await agent.post("/signUp").send(userObject)
            const {header,body,error}=response;
            expect(error).to.be.eql(false)
            expect(response).to.have.property("status").eql(200);
            expect(body).to.have.property("message").eql(responseMessage)
            expect(header).to.have.property('content-type') .eql(contentType)
            expect(header).to.have.property('content-length').eql(contentLength)
            expect(header).to.have.property('access-control-allow-credentials').eql(true)
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
