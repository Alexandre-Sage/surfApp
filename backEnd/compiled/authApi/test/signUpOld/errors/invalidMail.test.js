import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader400ObjectNoCookie, clientErrorObject, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";
import { invalidMailObject } from "../signUpAssets";
export default describe("3.4) SHOULD RETURN INVALID EMAIL ERROR", function () {
    it("Should post a new user and return error for invalid email", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = { ...invalidMailObject };
        const message = "The provided email is incorrect";
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
