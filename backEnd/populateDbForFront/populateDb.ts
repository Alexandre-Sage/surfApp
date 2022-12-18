import mocha from "mocha"
//import uploadUserImage from "./imageApi/test/userImageUpload/sucess"
import { } from "../authApi/test/signUp/sucess/signUpSucess.test";

describe("#######################################POPULATE DB#######################################", () => {
  describe("CREATE USER", () => {
    require("./authApi/test/signUp/sucess/signUpSucess.test")
  })
  describe('ADD USER IMAGE', () => {
    for (let i = 0; i <= 6; i++) {
      require("./imageApi/test/userImageUpload/sucess")
    }
  });
  describe("ADD SPOT TO DATABASE", () => {

  })
})