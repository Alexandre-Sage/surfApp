import server from "../../server.js";
import chai, { request, assert, should, expect, } from "chai";
import chaiHttp from "chai-http"
import { Suite } from "mocha";
import { Response } from "express"
import { ServerResponse } from "http";

import fetch from "node-fetch";

import {loginFunction} from "../../../authApi/test/loginOld/sucess/loginSucess.test.js";

chai.use(chaiHttp)
const cookieName = (arrayIndex: number, response: any): string => {
    const { header } = response;
    const cookie = header["set-cookie"][arrayIndex]
    return cookie.split("=")[0];
}
const url="http://localhost:3500/logIn"
const getAuthentificationToken =  async (url: string, credentials:any): Promise<string>=>{
    const token:any= await fetch(url,{
        method:"POST", 
        //credentials: "include",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    /*const headers= token.headers as string[]
    for(const [key, item] of headers){
        const verify=item.split("=")
        if(verify[0]==="JWT-TOKEN") return token=verify[1]
    }*/
    return token.json()
}


export default function getUserHeaderSucessTest(): Suite {
    return describe("LOG IN AND GET USER HEADER INFO", function () {
        it("Should log in and get user header json info", async () => {
            const agent = chai.request.agent(server);
            const credentials = { email: "test@testOne.com", password: "test" };
            //const responseMessage = "Welcome back TestOne!";
            const contentType = 'application/json; charset=utf-8';
            //const contentLength = '49';
            try {
                //const role= await loginFunction(agent, credentials, url)
                const token:any= await getAuthentificationToken(url,credentials)
                const response = await agent.get("/header").set("Authorization", `Bearer ${token.token}`)//await agent.post("/logIn").send(credentials);
                const { header, body, error } = response;
                expect(error).to.be.eql(false)
                expect(response).to.have.property("status").eql(200);
                //expect(body).to.have.property("message").eql(responseMessage);
                expect(header).to.have.property("set-cookie");
                expect(header).to.have.property('content-type').eql(contentType);
                //expect(header).to.have.property('content-length').eql(contentLength);
                expect(header).to.have.property('access-control-allow-credentials').eql("true");
                //expect(cookieName(0, response)).to.be.eql("JWT-TOKEN");
            } catch (error: any) {
                throw error
            };
        });
    });
};




// import server from "../../../../server";
// import { testGetRoute, testPostRoute } from "../../testModules/httpModule.test";
// import { jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent, } from "../../globalsTestVar";

// const fuck = {
//     location: 'TestOne',
//     name: 'TestOne',
//     firstName: 'TestOne',
//     userName: 'TestOne',
//     //email: 'test@testOne.com',
//     //phone: '0606654654',
//     creationDate: "2022-08-09T19:32:54.000Z",
//     //lastConnection: "2022-08-09T19:32:54.000Z",
//     //picture: [],
// }
// export default describe("1) SHOULD GET USER PROFIL HEADER", function () {
//     it("Should log and get user profil header", async () => {
//         const chai = chaiAgent();
//         const agentObj = { agent: chai.request.agent(server) };
//         const sendBody = { email: "test@testOne.com", password: "test" };
//         const responseProperty = [
//             { propertyName: "userInfo", propertyValue: fuck },
//             { propertyName: "error", propertyValue: false }
//         ];
//         const assertBodyObj = {
//             redirectsLength: 0,
//             propertyArray: responseProperty
//         };
//         try {
//             await testGetRoute(agentObj, "/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
//             await testPostRoute(agentObj, "/login", sendBody, jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj);
//             await testGetRoute(agentObj, "/userProfil/header", jsonHeader200ObjectNoCookie, noErrorObject, assertBodyNoRedirectObj)
//             agentObj.agent.close();
//         } catch (error: any) {
//             agentObj.agent.close();
//             throw error;
//         };
//     });
// });