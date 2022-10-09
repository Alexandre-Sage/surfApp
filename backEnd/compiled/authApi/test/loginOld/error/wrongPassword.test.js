import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader400ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, clientErrorObject, chaiAgent } from "../../globalsTestVar";
export default describe("2.1) WRONG PASSSWORD ERROR", function () {
    it("Should raise an error for wrong password", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = { email: "test@testOne.com", password: "testee" };
        const message = "Invalid password";
        const responseProperty = [
            { propertyName: "message", propertyValue: message },
            { propertyName: "error", propertyValue: true }
        ];
        const assertBodyObj = {
            redirectsLength: 0,
            propertyArray: responseProperty
        };
        try {
            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
            await testPostRoute(agentObj, "/login", sendBody, jsonHeader400ObjectNoCookie, clientErrorObject, assertBodyObj);
            agentObj.agent.close();
        }
        catch (error) {
            agentObj.agent.close();
            throw error;
        }
        ;
    });
});
