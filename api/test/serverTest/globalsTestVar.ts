import chai from "chai";
import chaiHttp from "chai-http";

const chaiAgent=()=>chai.use(chaiHttp);

const jsonHeader200ObjectNoCookie={status:200,contentType:"application/json; charset=utf-8",cookie:false,origin:"http://127.0.0.1:4875"};

const jsonHeader400ObjectNoCookie={status:400,contentType:"application/json; charset=utf-8",cookie:false,origin:"http://127.0.0.1:4875"};

const jsonHeader200ObjCookie={status:200,contentType:"application/json; charset=utf-8",origin:"http://127.0.0.1:4875",cookie:true};

const jsonSqlError400Object={status:400,contentType:"application/json; charset=utf-8",cookie:false,origin:"http://127.0.0.1:4875"};

const assertBodyNoRedirectObj={redirectsLength:0};

const assertBodyRedirectObj={redirectsLength:1};

const noErrorObject={clientError:false,serverError:false,badRequest:false};

const clientErrorObject={clientError:true,serverError:false, badRequest:true};
export {
    jsonHeader200ObjectNoCookie,
    jsonHeader200ObjCookie,
    jsonHeader400ObjectNoCookie,
    jsonSqlError400Object,
    assertBodyNoRedirectObj,
    assertBodyRedirectObj,
    noErrorObject,
    clientErrorObject,
    chaiAgent,
};
