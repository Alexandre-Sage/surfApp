import dotenv from "dotenv";
import chai from "chai";
dotenv.config()
const {log,table}=console;

describe.only('SERVER API',()=>{
    require("./serverTest/serverHighOrder.test");
});

describe("DATABASE",()=>{
        //require("./mongoTest/mongoTestHighOrder");
});
