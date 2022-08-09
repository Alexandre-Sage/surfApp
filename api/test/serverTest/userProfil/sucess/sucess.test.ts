import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent, } from "../../globalsTestVar";

/*location: 'TestOne',
  name: 'TestOne',
  firstName: 'TestOne',
  userName: 'TestOne',
  email: 'test@testOne.com',
  phone: '0606654654',
  creationDate: 2022-08-09T19:32:54.000Z,
  lastConnection: 2022-08-09T19:32:54.000Z,
  picture: [],*/
export default describe("1) SHOULD GET USER PROFIL", function () {
    it("Should log and get uuser profil", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = { email: "test@testOne.com", password: "test" };
        const message = "Welcome back TestOne!";
        const responseProperty = [
            { propertyName: "message", propertyValue: message },
            { propertyName: "error", propertyValue: false }
        ];
        const assertBodyObj = {
            redirectsLength: 0,
            propertyArray: responseProperty
        };
        try {
            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
            await testPostRoute(agentObj, "/login", sendBody, jsonHeader200ObjCookie, noErrorObject, assertBodyObj);
            await testGetRoute(agentObj, "/userProfil", jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj)
            agentObj.agent.close();
        } catch (error: any) {
            agentObj.agent.close();
            throw error;
        };
    });
});