import {connect,disconnect,MongooseError} from "mongoose";

export default async function addMongoEntries(mongoSchema:any):Promise<boolean | MongooseError>{
    return await connect(`${process.env.MONGO_DB}`,{
        autoIndex: true,
    })
    .then((conn:any)=>mongoSchema.save(conn))
    .then(()=>true)
    .catch((err:MongooseError)=>err)
    .finally(()=>disconnect())
};
