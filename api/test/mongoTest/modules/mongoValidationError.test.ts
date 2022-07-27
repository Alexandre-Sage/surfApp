import chai,{request,assert,should,expect} from "chai";

const {log}=console;

const mongoValidationError=(addEntryFunction:Function, mongoSchema:Object,path:string,type:string,description:String)=>{
    it(`${description}`,(done)=>{
        addEntryFunction(mongoSchema)
        .then((err:any)=>{
            const errorObj=err.errors[path].properties
            expect(typeof err).to.be.eql("object");
            expect(errorObj.path).to.be.eql(path);
            expect(errorObj.type).to.be.eql(type);
            done()
        })
        .catch((err:Error)=>done(err))
    });
;}
export default mongoValidationError
