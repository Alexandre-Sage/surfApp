import "mocha";
import getProfilHeaderTest from "./sucess/profilHeader";
import getProfilPictureTest from "./sucess/profilPicture.test";
import { updateUserProfilSucessTest } from "./sucess/updateProfil.test";
describe("################################## AUTH API TEST SUITE ##################################", () => {
   describe("1) GET USER INFO ROUTE", () => {
      getProfilHeaderTest();
     getProfilPictureTest();
     updateUserProfilSucessTest();
   })
});