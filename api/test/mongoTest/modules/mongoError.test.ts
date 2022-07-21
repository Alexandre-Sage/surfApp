import chai,{request,assert,should,expect} from "chai";

const {log}=console;

const mongoErrorTest=(addEntryFunction:Function, mongoSchema:Object, field:String, code:Number, description:String)=>{
    it(`${description}`,(done)=>{
        addEntryFunction(mongoSchema)
        .then((err:Error)=>{
            expect(typeof err).to.be.eql("object");
            expect(err).to.have.property("code").eql(code)
            expect(err).to.have.property("keyPattern").eql({[`${field}`]:1});
            done()
        })
        .catch((err:Error)=>done(err))
    });
;}
export default mongoErrorTest
