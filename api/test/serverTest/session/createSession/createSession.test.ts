import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";
import User from "../../../../mongo/users/users";
import fetchOneEntriesFromDb from "../../../../mongo/modules/fetchOneEntries";

export default describe("1) SHOULD ADD SPOT TO DATABSE", function (this) {

    before(async () => {
        const researchObject = { userName: "TestOne" };
        const fieldObject = { _id: 1 };
        try {
            const userId = await fetchOneEntriesFromDb(User, researchObject, fieldObject);
            const newSession = {
                userId: userId._id,
                date: new Date().toUTCString(),
                spotId: "test for now",
                startTime: new Date().toUTCString(),
                endTime: new Date().toUTCString(),
                totalTime: new Date().toUTCString(),
                swell: {
                    size: "2m",
                    period: "12s",
                    orientation: "NO"
                },
                wind: {
                    strength: "12knot",
                    orientation: "E"
                },
                comment: "Something to say about"
            };
            this.ctx.session = newSession;
        } catch (err) {
            throw err
        };
    });


    it("Should add spot to database with sucess", async () => {
        //console.log(this.ctx.session)
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const credentials = { email: "test@testOne.com", password: "test" };
        const sendBody = this.ctx.session;
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
            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
            await testPostRoute(agentObj, "/login", credentials, jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
            testPostRoute(agentObj, "/session/createSession", sendBody, jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj)
        } catch (err) {
            console.log(err)
            throw err
        }

    });
});