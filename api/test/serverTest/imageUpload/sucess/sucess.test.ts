import server from "../../../../server";
import { expect } from "chai";
import fs from "fs";
import path from "path";
import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent } from "../../globalsTestVar";
const boundary = Math.random();
const filename = "image.jpg"
export default describe("IMAGE UPLOAD", function () {
    it("should do something", async () => {
        const chai = chaiAgent();
        const agentObj = { agent: chai.request.agent(server) };
        const sendBody = { email: "test@testOne.com", password: "test" };
        const file = "test/serverTest/imageUpload/sucess/image.jpg";
        try {
            await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
            await testPostRoute(agentObj, "/login", sendBody, jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
            const res = await agentObj.agent.post("/userProfil/uploadPicture")
                .set('Content-Type', 'multipart/form-data; boundary=' + boundary)
                .attach("image", fs.readFileSync(file), "imageTest.jpg")

            expect(res.status).to.be.eql(200)
        } catch (error) {
            throw error
        }
    })
})