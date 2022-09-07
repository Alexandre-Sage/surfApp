import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent, } from "../../globalsTestVar";

export default describe.only("2) SHOULD GET ALL USER SPOTS", function () {
    it("Should log and get user Sspot", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
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
            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
            await testPostRoute(agentObj, "/login", sendBody, jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
            await testGetRoute(agentObj, "/spot/getAllSpots", jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj)
            agentObj.agent.close();
        } catch (error: any) {
            agentObj.agent.close();
            throw error;
        };
    });
});