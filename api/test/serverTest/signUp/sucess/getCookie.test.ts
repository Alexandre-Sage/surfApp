import server from "../../../../server";
import {testGetRoute} from "../../testModules/httpModule.test";
import {jsonHeader200ObjCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent} from "../../globalsTestVar";

export default describe("1) GET THE COOKIE FOR SIGN UP",function(){
    const chai=chaiAgent();
    it("Should get a cookie",(done)=>{
        const agentObj={agent:chai.request.agent(server)};
        testGetRoute(agentObj, "/sign-up/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
        .then(()=>done())
        .catch((err:Error)=>done(err));
    });
});
