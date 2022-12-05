import "mocha";
import mongoose from "mongoose";
import { SpotSchema } from "../../mongoDb/spots/spot";

describe("################################## SPOT API TEST SUITE ##################################", () => {
  //before(async () => {
  //  try {
  //    await db.models.Spot.deleteMany()
  //  } catch (error) {
  //    throw error
  //  };
  //});
  describe("Should say Hello World", () => {
    require("./spot/sucess/addSpotSucess.test")
    require("./spot/sucess/getOneSpot.test")
    require("./spot/sucess/getSpots.test")
  });
});