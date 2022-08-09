import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader400ObjectNoCookie, clientErrorObject, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";
import { missingPasswordObject } from "../signUpAssets";

export default describe("3.9) SHOULD RETURN MISSING PASSWORD ERROR", function () {
    it("Should post a new user and return error for missing password", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = missingPasswordObject;
        const message = "The field password is empty";
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
        } catch (err) {
            throw err;
        }
    });
});
