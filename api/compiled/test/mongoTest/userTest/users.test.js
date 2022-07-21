"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersAssets_1 = require("./usersAssets");
const chai_1 = require("chai");
const users_1 = require("../../../mongo/users/users");
const { log, table } = console;
/*describe("",()=>{
    it("Should add a user to the DB",()=>{

    });
});*/
exports.default = describe("1) TEST USER SCHEMA", function () {
    /*after(async ()=>{
        await connect("mongodb://localhost:27017/surfApp")
        .then(()=>User.remove())
        .catch(err=>log(err))
    })*/
    describe("1.1) POT USER TO DB WITHOUT ERROR", function () {
        it("Should add a user to the DB", (done) => {
            (0, users_1.addUser)(usersAssets_1.userOne)
                .then((res) => {
                log(typeof res);
                (0, chai_1.expect)(typeof res).to.be.eql("boolean");
                (0, chai_1.expect)(res).to.be.eql(true);
                done();
            }).catch((err) => done(err));
        });
    });
    describe("1.2) SHOULD POST USER AND RETURN AN ERROR", () => {
        it("Return something", (done) => {
            (0, users_1.addUser)(usersAssets_1.userOne)
                .then((res) => {
                log(typeof res);
                log(res);
                //expect(typeof res).to.be.eql("boolean");
                //expect(res).to.be.eql(true)
                done();
            }); //.catch((err:any)=>done(err))
        });
    });
});
