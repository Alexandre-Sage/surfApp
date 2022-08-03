import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";

describe("USER LOGED WITH SUCESS", function () {
    it("Sould login user with sucess", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = { userName: "TestOne", password: "test" };
        /*const message="User was sucessfully created";
        const responseProperty=[
            {propertyName:"message",propertyValue:message},
            {propertyName:"error",propertyValue:false}
        ];*/
        /*const assertBodyObj={
            redirectsLength:0,
            propertyArray:responseProperty
        };*/
        try {
            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
            await testPostRoute(agentObj, "/login", sendBody, jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
            agentObj.agent.close()
        } catch (error: any) {
            agentObj.agent.close()
            throw error
        };
    });
});