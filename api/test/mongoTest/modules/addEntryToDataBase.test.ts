import {/*request,assert,should,*/expect} from "chai";

const {log}=console;

const addEntryToDataBaseTest=(addEntryFunction:Function, mongoSchema:Object, collectionName:String)=>{
    it(`Should add a ${collectionName} to the DB`,(done)=>{
        addEntryFunction(mongoSchema)
        .then((res:Object | Boolean)=>{
            expect(typeof res).to.be.eql("boolean");
            expect(res).to.be.eql(true);
            done();
        })
        .catch((err:Error)=>{done(err);log(err)});
    });
};
export default addEntryToDataBaseTest;
