import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader400ObjectNoCookie, clientErrorObject, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";
import { missingUserNameObject } from "../signUpAssets";
export default describe("3.6) SHOULD RETURN MISSING USERNAME ERROR", function () {
    it("Should post a new user and return error for missing user name", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = { ...missingUserNameObject };
        const message = "The userName's field is empty";
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
            await testPostRoute(agentObj, "/sign-up", sendBody, jsonHeader400ObjectNoCookie, clientErrorObject, assertBodyObj);
        }
        catch (err) {
            throw err;
        }
    });
});
