import server from "../../../../server";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent, } from "../../globalsTestVar";
import fetchOneEntriesFromDb from "../../../../mongo/modules/fetchOneEntries";
import User from "../../../../mongo/users/users";
import { Spot } from "../../../../mongo/spots/spots";

export default describe("3) SHOULD GET ONE USER SPOTS", function () {
    before(async () => {
        const researchObjectUser = { userName: "TestOne" };
        const researchObjectSpot = { spotName: "Fuck" }
        const fieldObject = { _id: 1 };
        try {
            const userId = await fetchOneEntriesFromDb(User, researchObjectUser, fieldObject);
            const spot = await fetchOneEntriesFromDb(Spot, researchObjectSpot, fieldObject);
            const spotId = spot._id
            //console.log(userId)
            this.ctx.spotId = spotId
        } catch (err) { console.log(err) };
    })
    it("Should log and get user spots", async () => {
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
            await testGetRoute(agentObj, `/spot/getSpot/${this.ctx.spotId}`, jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj)
            agentObj.agent.close();
        } catch (error: any) {
            agentObj.agent.close();
            throw error;
        };
    });
});