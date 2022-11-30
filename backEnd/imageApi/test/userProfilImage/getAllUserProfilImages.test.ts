import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { Suite } from "mocha";
import { getAuthentificationToken } from "../../../sharedModules/testModules/login";
import server from "../../server";
import { objectPropertyAssertion } from "../../../sharedModules/testModules/assertionModule";

chai.use(chaiHttp)
const url = `https://development.alexandre-sage-dev.fr/auth/logIn`

const data = [{
  location: 'TestOne',
  name: 'TestOne',
  firstName: 'TestOne',
  userName: 'TestOne',
  creationDate: "2022-10-15T18:46:17.000Z"
}]

export default describe("LOG IN AND GET USER PICTURES", function () {
  it("Should log in and get user header json info", async () => {
    const agent = chai.request.agent(server);
    const credentials = { email: "test@testOne.com", password: "test" };
    const responseMessage = data;
    const contentType = 'application/json; charset=utf-8';
    //const propertyArray = ["path", "place", "_id"]
    try {
      const token: any = await getAuthentificationToken(url, credentials)
      const response = await agent.get("/image/allUserProfilPicture").set("Authorization", `Bearer ${token.token}`);
      const { header, body, error } = response;
      expect(error).to.be.eql(false);
      expect(response).to.have.property("status").eql(200);
      expect(body).to.be.a("array");
      //objectPropertyAssertion(body[0], propertyArray);
      expect(header).to.have.property('content-type').eql(contentType);
      expect(header).to.have.property('access-control-allow-credentials').eql("true");
    } catch (error: any) {
      throw error
    };
  });
});










