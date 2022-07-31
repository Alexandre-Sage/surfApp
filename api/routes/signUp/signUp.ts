import express,{Request,Response} from "express";
import notEmptyCheck from "../modules/dataValidation/notEmpty";
import addMongoEntries from "../../mongo/modules/addMongoEntries";
import createUser from "./modules/createUser";
import {tokenGenerator} from "../modules/cookies/general";
import {csurfCookieGenerator,csurfChecking} from "../modules/cookies/csurf";

const router=express.Router();
router.get("/csrf",function(req:Request,res:Response):Response<JSON>{
    const csurfToken=tokenGenerator(50);
    const csrfName="CSRF-TOKEN";
    const options={httpOnly: true, signed: true, sameSite: true, maxAge:600000};
    csurfCookieGenerator(req,csurfToken);
    return res.status(200).cookie(csrfName,csurfToken,options).json({});
});

router.post("/",async function(req:Request,res:Response){
    const session=req.session;
    const bodyCopy={...req.body};
    delete bodyCopy.picture;
    const createUserPromiseArray=[csurfChecking(session,req),notEmptyCheck(bodyCopy),createUser(req.body)];
    await Promise.all(createUserPromiseArray)
    .then((resolved:Array<any>)=>addMongoEntries(resolved[2]))
    .then(()=>res.status(200).json({
        message:"User was sucessfully created",
        error:false
    }))
    .catch((err)=>res.status(err.httpStatus).json({
        message: err.message,
        error:true
    }))
});

export default router;
