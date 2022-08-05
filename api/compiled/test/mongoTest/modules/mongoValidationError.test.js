"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const { log } = console;
const mongoValidationError = (addEntryFunction, mongoSchema, path, type, description) => {
    it(`${description}`, (done) => {
        addEntryFunction(mongoSchema)
            .then((err) => {
            const errorObj = err.errors[path].properties;
            (0, chai_1.expect)(typeof err).to.be.eql("object");
            (0, chai_1.expect)(errorObj.path).to.be.eql(path);
            (0, chai_1.expect)(errorObj.type).to.be.eql(type);
            done();
        })
            .catch((err) => done(err));
    });
    ;
};
exports.default = mongoValidationError;
