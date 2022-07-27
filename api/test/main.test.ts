import mocha from "mocha";
import chaiHttp from "chai-http";
import server from "../server";
import dotenv from "dotenv";
import chai from "chai";

//A ENLEVER?
dotenv.config()
chai.use(chaiHttp);
const {log,table}=console;
const sec={
    i:1
};
setTimeout(()=>{
    console.log(sec.i)
    return sec.i+=1
},1000)
describe.only('SERVER',()=>{
    it("Should do everything",()=>{
        log("nothing here for now")
    });
});

describe("DATABASE",()=>{
        //require("./mongoTest/mongoTestHighOrder");
});
