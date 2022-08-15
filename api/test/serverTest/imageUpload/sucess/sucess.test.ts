import server from "../../../../server";
import { expect } from "chai";
import fs from "fs";
import path from "path";
import { testGetRoute, testPostRoute, testPostFileRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";
const filename = "image.jpg"


export default describe("IMAGE UPLOAD", function () {
    it("should upload an image to the server and save path in database", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = { email: "test@testOne.com", password: "test" };
        const file = "test/serverTest/imageUpload/sucess/image.jpg";
        try {
            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
            await testPostRoute(agentObj, "/login", sendBody, jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
            await testPostFileRoute(agentObj, "/userProfil/uploadPicture", file, "refacto.jpg", jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj)
        } catch (error) {
            throw error
        }
    })
})