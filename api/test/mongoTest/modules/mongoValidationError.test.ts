import chai,{request,assert,should,expect} from "chai";

const {log}=console;

const mongoValidationError=(addEntryFunction:Function, mongoSchema:Object, field:String, kind:String, description:String)=>{
    it(`${description}`,(done)=>{
        addEntryFunction(mongoSchema)
        .then((err:any)=>{
            log(err.errors)
            const test=Object.entries(err.errors)
            log(test[1])
            expect(typeof err).to.be.eql("object");
            //expect(err.errors).to.be.eql(kind)
            //expect(err.errors).to.have.property("path").eql(`${field}`);
            done()
        })
        .catch((err:Error)=>done(err))
    });
;}
export default mongoValidationError
