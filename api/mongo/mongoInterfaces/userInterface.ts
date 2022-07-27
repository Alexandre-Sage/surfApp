import {PictureObject} from "./pictureObjectInterface";

export interface UserInterface{
    location:String,
    name:String,
    firstName:String,
    userName:String,
    email:String,
    phone:String,
    password:String,
    picture:Array<PictureObject>
    creationDate:Date,
    lastConnection:Date
}
