import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";
import { userObject } from "../signUpAssets";
export default describe("2) POST THE LOGIN FORM", function () {
    it("Should post the sign-up form and crate new user", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = { ...userObject };
        const message = "User was sucessfully created";
        const responseProperty = [
            { propertyName: "message", propertyValue: message },
            { propertyName: "error", propertyValue: false }
        ];
        const assertBodyObj = {
            redirectsLength: 0,
            propertyArray: responseProperty
        };
        try {
            await testGetRoute(agentObj, "/sign-up/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
            await testPostRoute(agentObj, "/sign-up", sendBody, jsonHeader200ObjectNoCookie, noErrorObject, assertBodyObj)
        } catch (err) {
            throw err
        }
    });
});
