import "mocha";
import { addSpotWithSucessTest } from "./spot/sucess/addSpotSucess.test";
import { getOneSpotSucessTest } from "./spot/sucess/getOneSpot.test";
import { getAllSucessTest } from "./spot/sucess/getSpots.test";


describe("Project set up test", () => {
  describe("Should say Hello World", () => {
    addSpotWithSucessTest();
    getOneSpotSucessTest();
    getAllSucessTest();
  });
});