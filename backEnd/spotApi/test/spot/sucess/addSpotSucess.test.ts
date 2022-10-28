import server from "../../../server";
import chai, { assert, should, expect } from "chai";
import chaiHttp from "chai-http"
import { Suite, SuiteFunction } from "mocha";
import getOneDocument from "../../../../sharedModules/mongoDb/getOneDocument";
import { User } from "../../../../mongoDb/user/users";
import { getAuthentificationToken } from "../../../../sharedModules/testModules/login";
import registry from "../../../../../urlRegistry.mjs";
import { Types } from "mongoose";
const { devloppmentServer } = registry;



const url = `${devloppmentServer.authApi}/logIn`

export function addSpotWithSucessTest(): Suite {
  chai.use(chaiHttp)
  return describe("LOG IN AND ADD SPOT SUCESFULL", function () {
    before(async () => {
      const newSpot = {
        spotName: "Fuck",
        country: "spotTest",
        type: {
          waveType: "Shore break",
          bottomType: "Reef",
        },
        location: {
          type: "Point",
          coordinates: ["47.52408959", "-3.1545563"]
        },
        orientation: ["N", "N/E", "NN/E"],
        creationDate: new Date().toUTCString()
      };
      this.ctx.spot = newSpot;
    });


    it("Should log in and post a new spot to data base with sucess", async () => {
      const agent = chai.request.agent(server);
      const responseMessage = "Spot added with sucess";
      const contentType = 'application/json; charset=utf-8';
      const credentials = { email: "test@testOne.com", password: "test" };
      const contentLength = '50';
      try {
        const token: any = await getAuthentificationToken(url, credentials);
        const response = await agent.post("/newSpot").send(this.ctx.spot).set("Authorization", `Bearer ${token.token}`);
        const { header, body, error } = response;
        expect(error).to.be.eql(false);
        expect(response).to.have.property("status").eql(200);
        expect(body).to.have.property("message").eql(responseMessage);
        expect(header).to.have.property('content-type').eql(contentType);
        expect(header).to.have.property('content-length').eql(contentLength);
        expect(header).to.have.property('access-control-allow-credentials').eql("true");
      } catch (error: any) {
        console.log(error)
        throw error;
      };
    });
  });
};





