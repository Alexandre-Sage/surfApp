import server from "../../../server";
import { userObject } from "../signUpAssets";
import { expect } from "chai";
import chai from "chai";

export default function dupUserNameErrorTest(){
    describe("SIGN UP DUPLICATE USER NAME ERROR",function(){
        it("Should handle posted sign up from and send dup user name error", async () => {
            const agent = chai.request.agent(server);
            const responseMessage=process.env.NODE_ENV==="developpment"?"ADD MONGO DOCUMENT ERROR SWITCH":"The userName TestOne is already used.";
            const contentType='application/json; charset=utf-8';
            const contentLength= process.env.NODE_ENV==="developpment"?'58':'64';
            try {
                const response = await agent.post("/signUp").send(userObject)
                const { header, body, clientError,serverError }=response;
                expect(clientError).to.be.eql(true);
                expect(serverError).to.be.eql(false);
                expect(response).to.have.property("status").eql(400);
                expect(body).to.have.property("message").eql(responseMessage);
                expect(header).to.have.property('content-type') .eql(contentType);
                expect(header).to.have.property('content-length').eql(contentLength);
                expect(header).to.have.property('access-control-allow-credentials').eql("true");
            } catch (error: any) {
                console.log(error)
                throw error
            };
        });
    });
};
