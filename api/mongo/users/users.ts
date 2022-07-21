import {Schema,model} from "mongoose";
import {UserInterface} from "../mongoInterfaces/userInterface";

const UserSchema=new Schema<UserInterface>({
    location:{type:String,required:true},
    name:{type:String,required:true},
    firstName:{type:String,required:true},
    userName:{type:String,required:true,unique:true,index:true,dropDups:false},
    email:{type:String,required:true,unique:true,index:true,dropDups:false},
    phone:{type:String,required:true,unique:true,index:true,dropDups:false},
    picture:[
        {
            path:{type:String,required:false},
            place:{type:String,required:false},
            uploadDate:{type:Date,required:false}
        }
    ],
    creationDate:{type:Date,default: Date.now,required:true},
    lastConnection:{type:Date,default: Date.now,required:true},
});
const User=model<UserInterface>("User",UserSchema);
User.createIndexes();
export {User,UserSchema}
