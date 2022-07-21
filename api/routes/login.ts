import express,{Request,Response} from "express";

//import server from "../server"
//const server=express();
const router=express.Router();
/*DEV*/
const {log,table}=console;


router.get("/csrf",(req:Request,res:Response)=>{
    res.json({
        message:"OK"
    });
});

export default router;
