import mocha from "mocha";
import chaiHttp from "chai-http";
import server from "../server";
import dotenv from "dotenv";
import chai from "chai";

//A ENLEVER?
dotenv.config()
chai.use(chaiHttp);
const {log,table}=console;

describe('SERVER',()=>{
    it("Should do everything",()=>{
        log("nothing here for now")
    });
});

describe.only("DATABASE",()=>{
    require("./mongoTest/mongoTestHighOrder");
});
