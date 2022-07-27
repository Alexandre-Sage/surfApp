import {Schema,model} from "mongoose";
import {SessionInterface} from "../mongoInterfaces/sessionInterface";

const SessionSchema=new Schema<SessionInterface>({
    date:{type:Date,required:true},
    spot:{type:String,required:true},
    userName:{type:String,required:true},
    startTime:{type:Date,required:false},
    endTime:{type:Date,required:false},
    totalTime:{type:Date,required:false},
    swell:{
        size:{type:String,required:true},
        period:{type:String,required:true},
        orientation:{type:String,required:true}
    },
    wind:{
        strength:{type:String,required:true},
        orientation:{type:String,required:true}
    },
    comment:{type:String,required:false}
});
const Session=model<SessionInterface>("Session",SessionSchema);
export {Session,SessionSchema};
