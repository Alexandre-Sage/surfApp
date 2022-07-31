import server from "../../../../server";
import {testGetRoute,testPostRoute} from "../../testModules/httpModule.test";
import {jsonHeader200ObjCookie,jsonHeader400ObjectNoCookie, clientErrorObject, jsonHeader200ObjectNoCookie, assertBodyNoRedirectObj, noErrorObject, chaiAgent} from "../../globalsTestVar";
import {userObject} from "../signUpAssets";
//PROBLEME AVEC TOUT LES TEST
export default describe("2.1) SHOULD RETURN DUPLICATE USERNAME ERROR",function(){
    it("Should post a new user and return error for duplicate userName",(done)=>{
        const chai=chaiAgent();
        const agentObj={agent:chai.request.agent(server)};
        const sendBody={...userObject};
        const message="The userName TestOne is already used.";
        console.log(agentObj.agent)
        const responseProperty=[
            {propertyName:"message",propertyValue:message},
            {propertyName:"error",propertyValue:true}
        ];
        const assertBodyObj={
            redirectsLength:0,
            propertyArray:responseProperty
        };
        testGetRoute(agentObj,"/sign-up/csrf", jsonHeader200ObjCookie, noErrorObject, assertBodyNoRedirectObj)
        .then(()=>testPostRoute(agentObj,"/sign-up", sendBody, jsonHeader400ObjectNoCookie, clientErrorObject, assertBodyObj))
        .then((res:any)=>done())
        .catch(err=>done(err));
        //done()
    });
});
