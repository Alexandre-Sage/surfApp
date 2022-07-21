import {Schema,model} from "mongoose";
import {SpotInterface} from "../mongoInterfaces/spotInterface";

const SpotSchema=new Schema<SpotInterface>({
    userId:{type:String,required:true},
    spotName:{type:String,required:true},
    country:{type:String,required:true},
    type:[
        {
            waveType:{type:String,required:false},
            bottomType:{type:String,required:false},
        }
    ],
    location:{
        type:{type:String,required:true},
        coordinates:[{type:String,required:true}]
    },
    orientation:[{type:String,required:false}],
    optimalConditions:[
        {
            wind:{
                strength:{type:String,require:false},
                orientation:{type:String,require:false}
            },
            swell:{
                size:{type:String,require:true},
                period:{type:String,require:true},
                orientation:{type:String,require:true}
            }
        }
    ],
    sessions:[{type:String,require:false,unique:true}],
    creationDate:{type:Date,required:true}
});
const Spot=model<SpotInterface>("Spot",SpotSchema);
Spot.createIndexes();
export {Spot,SpotSchema};
