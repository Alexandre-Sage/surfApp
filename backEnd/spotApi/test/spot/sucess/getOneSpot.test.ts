import server from "../../../server";
import chai, { expect } from "chai";
import chaiHttp from "chai-http"
import { Suite } from "mocha";
import { getAuthentificationToken } from "../../../../sharedModules/testModules/login"
import registry from "../../../../../urlRegistry.mjs"
import getOneDocument from "../../../../sharedModules/mongoDb/getOneDocument";
import { User } from "../../../../mongoDb/user/users";
import { Types } from "mongoose";
import { Spot } from "../../../../mongoDb/spots/spots";

const { devloppmentServer } = registry;

chai.use(chaiHttp)

const url = `${devloppmentServer.authApi}/logIn`

const getUserId = async (userName: string): Promise<Types.ObjectId> => {
  const researchObject = { userName: userName };
  const fieldObject = { _id: 1 };
  const userData = await getOneDocument(User, researchObject, fieldObject);
  return userData._id;
}


export function getOneSpotSucessTest(): Suite {
  return describe("LOG IN AND GET ONE SPOT", function () {
    before(async () => {
      const researchObjectSpot = { spotName: "Fuck" }
      const fieldObject = { _id: 1 };
      try {
        const userId = await getUserId("TestOne");
        const spot = await getOneDocument(Spot, researchObjectSpot);
        //console.log(spot)
        this.ctx.spotId = spot._id;
        this.ctx.spot = spot;

      } catch (err) { console.log(err) };
    })

    it("Should log in and get one spot json info", async () => {
      const agent = chai.request.agent(server);
      const credentials = { email: "test@testOne.com", password: "test" };
      const responseMessage = this.ctx.spot;
      const contentType = 'application/json; charset=utf-8';
      //const contentLength = '126';
      try {
        const token: any = await getAuthentificationToken(url, credentials)
        const response = await agent.get(`/getSpot/${this.ctx.spotId}`).set("Authorization", `Bearer ${token.token}`);
        const { header, body, error } = response;
        expect(error).to.be.eql(false);
        expect(response).to.have.property("status").eql(200);
        //expect(body).to.be.eql(responseMessage);
        expect(header).to.have.property('content-type').eql(contentType);
        //expect(header).to.have.property('content-length').eql(contentLength);
        expect(header).to.have.property('access-control-allow-credentials').eql("true");
      } catch (error: any) {
        throw error
      };
    });
  });
};














//import server from "../../../../server";
//import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
//import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent, } from "../../globalsTestVar";
//import fetchOneEntriesFromDb from "../../../../mongo/modules/fetchOneEntries";
//import User from "../../../../mongo/users/users";
//import { Spot } from "../../../../mongo/spots/spots";

//export default describe("3) SHOULD GET ONE USER SPOTS", function () {
//  before(async () => {
//    const researchObjectUser = { userName: "TestOne" };
//    const researchObjectSpot = { spotName: "Fuck" }
//    const fieldObject = { _id: 1 };
//    try {
//      const userId = await fetchOneEntriesFromDb(User, researchObjectUser, fieldObject);
//      const spot = await fetchOneEntriesFromDb(Spot, researchObjectSpot, fieldObject);
//      const spotId = spot._id
//      //console.log(userId)
//      this.ctx.spotId = spotId
//    } catch (err) { console.log(err) };
//  })
//  it("Should log and get user spots", async () => {
//    const chai = chaiAgent();
//    const agentObj = { agent: chai.request.agent(server) };
//    const sendBody = { email: "test@testOne.com", password: "test" };
//    try {
//      await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
//      await testPostRoute(agentObj, "/login", sendBody, jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
//      await testGetRoute(agentObj, `/spot/getSpot/${this.ctx.spotId}`, jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj)
//      agentObj.agent.close();
//    } catch (error: any) {
//      agentObj.agent.close();
//      throw error;
//    };
//  });
//});