import server from "../../server.js";
import chai, { request, assert, should, expect, } from "chai";
import chaiHttp from "chai-http"
import { Suite } from "mocha";
import { Response } from "express"
import { ServerResponse } from "http";
import { getAuthentificationToken } from "../../../sharedModules/testModules/login.js"
import fetch from "node-fetch";
import registry from "../../../../urlRegistry.mjs"
const { devloppmentServer } = registry;

chai.use(chaiHttp)
const data = [{
   location: 'TestOne',
   name: 'TestOne',
   firstName: 'TestOne',
   userName: 'TestOne',
   creationDate: "2022-10-16T10:38:17.000Z"
}]
const url = `${devloppmentServer.authApi}/logIn`
export default function getUserHeaderSucessTest(): Suite {
   return describe.only("LOG IN AND GET USER HEADER INFO", function () {
      it("Should log in and get user header json info", async () => {
         const agent = chai.request.agent(server);
         const credentials = { email: "test@testOne.com", password: "test" };
         const responseMessage = data;
         const contentType = 'application/json; charset=utf-8';
         const contentLength = '126';
         try {
            const token: any = await getAuthentificationToken(url, credentials)
            const response = await agent.get("/header").set("Authorization", `Bearer ${token.token}`);
            const { header, body, error } = response;
            expect(error).to.be.eql(false);
            expect(response).to.have.property("status").eql(200);
            expect(body).to.be.eql(responseMessage);
            expect(header).to.have.property('content-type').eql(contentType);
            expect(header).to.have.property('content-length').eql(contentLength);
            expect(header).to.have.property('access-control-allow-credentials').eql("true");
         } catch (error: any) {
            throw error
         };
      });
   });
};




