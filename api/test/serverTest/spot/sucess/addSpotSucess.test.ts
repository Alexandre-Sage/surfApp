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
            const newSpot = {
                userId: userId._id,
                spotName: "spotTest",
                country: "spotTest",
                type: {
                    waveType: "Shore break",
                    bottomType: "Reef",
                },
                location: {
                    type: "Point",
                    coordinates: ["", "5"]
                },
                orientation: ["E", "N/E", "NN/E"],
                creationDate: new Date().toUTCString()
            };
            this.ctx.spot = newSpot;
        } catch (err) {
            throw err
        }

        //done()
        //console.log(this.ctx)
    });
    it("Should add spot to database with sucess", async () => {
        //console.log(this.ctx.spot)
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const credentials = { email: "test@testOne.com", password: "test" };
        const sendBody = this.ctx.spot;
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
            await testPostRoute(agentObj, "/spot/newSpot", sendBody, jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj)
        } catch (err) {
            throw err
        }

    });
});