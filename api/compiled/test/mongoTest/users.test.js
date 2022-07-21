"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import chai from "chai";
const chai_1 = require("chai");
const users_1 = require("../../mongo/users/users");
const { log, table } = console;
/*describe("",()=>{
    it("Should add a user to the DB",()=>{

    });
});*/
exports.default = describe("1) TEST USER SCHEMA", function () {
    describe("1.1) POT USER TO DB WITHOUT ERROR", function () {
        /*before(()=>{
            const user=new User({
                location:"Test",
                name:"Test",
                firstName:"Test",
                userName:"Testdqsqsd",
                email: "test@testsdqsqsdqs",
                phone:"0606654654",
                picture:[{path:"../../../",place:"here",uploadDate:Date.now()},{path:"../../../",place:"here",uploadDate:Date.now()}],
                creationDate:Date.now(),
                lastConnection:Date.now()
            });
        });*/
        it("Should add a user to the DB", (done) => {
            //console.log(this);
            const user = new users_1.User({
                location: "Test",
                name: "Test",
                firstName: "Test",
                userName: "Testdqsqsd",
                email: "test@testsdqsqsdqs",
                phone: "0606654654",
                picture: [{ path: "../../../", place: "here", uploadDate: Date.now() }, { path: "../../../", place: "here", uploadDate: Date.now() }],
                creationDate: Date.now(),
                lastConnection: Date.now()
            });
            //console.log(user)
            (0, users_1.addUser)(user)
                .then((res) => {
                log(typeof res);
                (0, chai_1.expect)(typeof res).to.be.eql("boolean");
                //expect(res).to.be.eql
            }).catch((err) => done(err));
            done();
            /*let sucess:boolean=false;
            let report:any;
            try{
                expect(addUser(user)).to.be.eql("boolean");
                sucess=true
            }catch(err) {
                return (report=err)
            }
            sucess?done():done(report)*/
            ///err?done(err):done()
        });
    });
});
