import "mocha";
import getProfilHeaderTest from "./sucess/profilHeader.js";
import getProfilPictureTest from "./sucess/profilPicture.test.js";
describe("################################## AUTH API TEST SUITE ##################################",()=>{
    describe("1) GET USER INFO ROUTE",()=>{
        getProfilHeaderTest();
        getProfilPictureTest();
    })
});