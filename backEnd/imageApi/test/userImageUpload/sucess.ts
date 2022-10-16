import fs from 'fs';
import server from "../../server.js";
import chai, { request, assert, should, expect, } from "chai";
import chaiHttp from "chai-http"
import { Suite } from "mocha";
import {getAuthentificationToken} from "../../../sharedModules/testModules/login.js"
import  registry  from "../../../../urlRegistry.mjs"
const {devloppmentServer}=registry;
const filePath = `test/userImageUpload/image.jpg`
const fileName= "image.jpg"
chai.use(chaiHttp)
const data=[{
    location: 'TestOne',
    name: 'TestOne',
    firstName: 'TestOne',
    userName: 'TestOne',
    creationDate: "2022-10-16T10:38:17.000Z"
}]
const url=`${devloppmentServer.authApi}/logIn`
export default function uploadUserImageSucessTest(): Suite {
    return describe.only("LOG IN AND GET UPLOAD AN IMAGE", function () {
        it("Should log in and get user header json info", async () => {
            const agent = chai.request.agent(server);
            const credentials = { email: "test@testOne.com", password: "test" };
            const responseMessage = data;
            const contentType = 'application/json; charset=utf-8';
            const contentLength = '126';
            const boundary = Math.random();
            try {
                const token:any= await getAuthentificationToken(url,credentials)
                const response = await agent.post("/userImageUpload")
                    .set("Authorization", `Bearer ${token.token}`)
                    .set('Content-Type', 'multipart/form-data; boundary=' + boundary)
                    .attach("image", fs.readFileSync(filePath), fileName);
                const { header, body, error } = response;
                console.log(response)
                //expect(error).to.be.eql(false);
                //expect(response).to.have.property("status").eql(200);
                //expect(body).to.be.eql(responseMessage);
                //expect(header).to.have.property('content-type').eql(contentType);
                //expect(header).to.have.property('content-length').eql(contentLength);
                //expect(header).to.have.property('access-control-allow-credentials').eql("true");
            } catch (error: any) {
                throw error
            };
        });
    });
};









//import server from "../../../../server";
//import { expect } from "chai";
//import { testGetRoute, testPostRoute, testPostFileRoute } from "../../testModules/httpModule.test";
//import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";
//
//
//
//export default describe("IMAGE UPLOAD", function () {
//    it("should upload an image to the server and save path in database", async () => {
//        const chai = chaiAgent();
//        const agentObj = { agent: chai.request.agent(server) };
//        const sendBody = { email: "test@testOne.com", password: "test" };
//        const file = "test/serverTest/imageUpload/sucess/image.jpg";
//        try {
//            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
//            await testPostRoute(agentObj, "/login", sendBody, jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
//            await testPostFileRoute(agentObj, "/userProfil/uploadPicture", file, "refacto.jpg", jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj)
//        } catch (error) {
//            throw error
//        }
//    });
//
//
//    /**/it("should upload an image to the server and save path in database", async () => {
//        const chai = chaiAgent();
//        const agentObj = { agent: chai.request.agent(server) };
//        const sendBody = { email: "test@testOne.com", password: "test" };
//        const file = "test/serverTest/imageUpload/sucess/image.jpg";
//        try {
//            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
//            await testPostRoute(agentObj, "/login", sendBody, jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
//            await testPostFileRoute(agentObj, "/userProfil/uploadPicture", file, "refacto2.jpg", jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj)
//        } catch (error) {
//            throw error
//        }
//    });
//})