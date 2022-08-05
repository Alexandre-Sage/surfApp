"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const { log } = console;
const addEntryToDataBaseTest = (addEntryFunction, mongoSchema, collectionName) => {
    it(`Should add a ${collectionName} to the DB`, (done) => {
        addEntryFunction(mongoSchema)
            .then((res) => {
            (0, chai_1.expect)(typeof res).to.be.eql("boolean");
            (0, chai_1.expect)(res).to.be.eql(true);
            done();
        })
            .catch((err) => { done(err); log(err); });
    });
};
exports.default = addEntryToDataBaseTest;
