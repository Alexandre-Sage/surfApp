import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";

describe.only("USER LOGED WITH SUCESS", function () {
    it("Sould login user with sucess", (done) => {
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
        testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
            .then(() => testPostRoute(agentObj, "/login", sendBody, jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj))
            .then(() => (done(), agentObj.agent.close()))
            .catch(err => (done(err), agentObj.agent.close()));
    });
});