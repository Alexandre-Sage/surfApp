import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader400ObjectNoCookie, clientErrorObject, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";
import { dupPhoneObject } from "../signUpAssets";
export default describe("3.3) SHOULD RETURN DUPLICATE PHONE ERROR", function () {
    it("Should post a new user and return error for duplicate phone", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = { ...dupPhoneObject };
        const message = "The phone 0606654654 is already used.";
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
