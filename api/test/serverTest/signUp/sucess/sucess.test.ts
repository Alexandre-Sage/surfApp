import server from "../../../../server";
import {testGetRoute,testPostRoute} from "../../testModules/httpModule.test";
import {jsonHeader200ObjCookie, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent} from "../../globalsTestVar";
import {userObject} from "../signUpAssets";
export default describe.only("2) POST THE LOGIN FORM",function(){
    it("Should post the sign-up form and crate new user",(done)=>{
        const chai=chaiAgent();
        const agentObj={agent:chai.request.agent(server)};
        const sendBody={...userObject};
        const message="User was sucessfully created";
        const responseProperty=[
            {propertyName:"message",propertyValue:message},
            {propertyName:"error",propertyValue:false}
        ];
        const assertBodyObj={
            redirectsLength:0,
            propertyArray:responseProperty
        };
        testGetRoute(agentObj,"/sign-up/csrf", jsonHeader200ObjCookie, noErrorObject,assertBodyNoRedirectObj )
        .then(()=>testPostRoute(agentObj,"/sign-up", sendBody, jsonHeader200ObjectNoCookie, noErrorObject, assertBodyObj))
        .then(()=>(done(),agentObj.agent.close()))
        .catch(err=>(done(err),agentObj.agent.close()));

    });
});
