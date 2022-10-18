import server from "../../../server.js";
import chai, { expect, } from "chai";
import chaiHttp from "chai-http";
chai.use(chaiHttp);
const cookieName = (arrayIndex, response) => {
    const { header } = response;
    const cookie = header["set-cookie"][arrayIndex];
    return cookie.split("=")[0];
};
export default function loginSucessTest() {
    return describe("LOG IN ROUTES SUCESSFULL", function () {
        it("Should handle posted log in from and authentificate the user", async () => {
            const agent = chai.request.agent(server);
            const credentials = { email: "test@testOne.com", password: "test" };
            const responseMessage = "Welcome back TestOne!";
            const contentType = 'application/json; charset=utf-8';
            const contentLength = '49';
            try {
                const response = await agent.post("/logIn").send(credentials);
                const { header, body, error } = response;
                expect(error).to.be.eql(false);
                expect(response).to.have.property("status").eql(200);
                expect(body).to.have.property("message").eql(responseMessage);
                expect(header).to.have.property("set-cookie");
                expect(header).to.have.property('content-type').eql(contentType);
                expect(header).to.have.property('content-length').eql(contentLength);
                expect(header).to.have.property('access-control-allow-credentials').eql("true");
                expect(cookieName(0, response)).to.be.eql("JWT-TOKEN");
            }
            catch (error) {
                throw error;
            }
            ;
        });
    });
}
;
export const loginFunction = async (agent, credentials, url) => {
    const responseMessage = "Welcome back TestOne!";
    const contentType = 'application/json; charset=utf-8';
    const contentLength = '49';
    try {
        const response = await agent.post(url).send(credentials);
        const { header, body, error } = response;
        expect(error).to.be.eql(false);
        expect(response).to.have.property("status").eql(200);
        expect(body).to.have.property("message").eql(responseMessage);
        expect(header).to.have.property("set-cookie");
        expect(header).to.have.property('content-type').eql(contentType);
        expect(header).to.have.property('content-length').eql(contentLength);
        expect(header).to.have.property('access-control-allow-credentials').eql("true");
        expect(cookieName(0, response)).to.be.eql("JWT-TOKEN");
        return agent;
    }
    catch (error) {
        throw error;
    }
    ;
};
