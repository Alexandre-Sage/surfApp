"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const { log } = console;
const mongoErrorTest = (addEntryFunction, mongoSchema, field, code, description) => {
    it(`${description}`, (done) => {
        addEntryFunction(mongoSchema)
            .then((err) => {
            (0, chai_1.expect)(typeof err).to.be.eql("object");
            (0, chai_1.expect)(err).to.have.property("code").eql(code);
            (0, chai_1.expect)(err).to.have.property("keyPattern").eql({ [`${field}`]: 1 });
            done();
        })
            .catch((err) => done(err));
    });
    ;
};
exports.default = mongoErrorTest;
