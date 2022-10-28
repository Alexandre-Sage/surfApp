import "mocha";
import fs from "fs";
import path from "path";
import uploadUserImageSucessTest from "./userImageUpload/sucess";


describe("IMAGE API",()=>{
    describe("1) IMAGE UPLOAD",()=>{
        uploadUserImageSucessTest();
    });
});



