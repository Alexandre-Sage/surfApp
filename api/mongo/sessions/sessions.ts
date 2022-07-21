import {Schema,model} from "mongoose";
import {SessionInterface} from "../mongoInterfaces/sessionInterface";

const SessionSchema=new Schema<SessionInterface>({
    date:{type:Date,required:true},
    spot:{type:String,require:true},
    userName:{type:String,require:true},
    startTime:{type:Date,required:false},
    endTime:{type:Date,required:false},
    totalTime:{type:Date,required:false},
    swell:{
        size:{type:String,require:true},
        period:{type:String,require:true},
        orientation:{type:String,require:true}
    },
    wind:{
        strength:{type:String,require:false},
        orientation:{type:String,require:false}
    },
    comment:{type:String,required:false}
});
const Session=model<SessionInterface>("Session",SessionSchema);
export {Session,SessionSchema};
