import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, jsonHeader400ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, clientErrorObject, chaiAgent } from "../../globalsTestVar";

export default describe("2.3) WRONG EMAIL ERROR", function () {
    it("Should raise an error for wrong email", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = { email: "inexisting@testOne.com", password: "qsdqsd" };
        const message = "email: inexisting@testOne.com not found please retry";
        const responseProperty = [
            { propertyName: "message", propertyValue: message },
            { propertyName: "error", propertyValue: true }
        ];
        const assertBodyObj = {
            redirectsLength: 0,
            propertyArray: responseProperty
        };
        try {
            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
            await testPostRoute(agentObj, "/login", sendBody, jsonHeader400ObjectNoCookie, clientErrorObject, assertBodyObj)
            agentObj.agent.close()
        } catch (error: any) {
            agentObj.agent.close()
            throw error
        };
    });
});