import "mocha";
import mongoose from "mongoose";
import { SpotSchema } from "../../mongoDb/spots/spot";
import { addSpotWithSucessTest } from "./spot/sucess/addSpotSucess.test";
import { getOneSpotSucessTest } from "./spot/sucess/getOneSpot.test";
import { getAllSucessTest } from "./spot/sucess/getSpots.test";

const db = mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
  autoIndex: true,
});
db.model("Spot", SpotSchema);

describe("################################## SPOT API TEST SUITE ##################################", () => {
  //before(async () => {
  //  try {
  //    await db.models.Spot.deleteMany()
  //  } catch (error) {
  //    throw error
  //  };
  //});
  describe("Should say Hello World", () => {
    addSpotWithSucessTest();
    getOneSpotSucessTest();
    getAllSucessTest();
  });
});