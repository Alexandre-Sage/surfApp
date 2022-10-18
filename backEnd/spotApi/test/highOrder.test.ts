import "mocha";
import { addSpotWithSucessTest } from "./spot/sucess/addSpotSucess.test.js";
import { getOneSpotSucessTest } from "./spot/sucess/getOneSpot.test.js";
import { getAllSucessTest } from "./spot/sucess/getSpots.test.js";


describe("Project set up test", () => {
  describe("Should say Hello World", () => {
    addSpotWithSucessTest();
    getOneSpotSucessTest();
    getAllSucessTest();
  });
});