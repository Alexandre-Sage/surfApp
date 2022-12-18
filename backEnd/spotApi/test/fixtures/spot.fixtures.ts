import { Types } from "mongoose";
import { SpotInterface } from "../../../mongoDb/spots/spotInterface";

const spotFactory = (spot: Partial<SpotInterface>) => {
  return ({
    spotName: "port blanc",
    country: "France",
    userId: spot.userId,
    type: {
      waveType: "Shore break",
      bottomType: "Sand",
    },
    location: {
      type: "Point",
      coordinates: ["47.52408959", "-3.1545563"]
    },
    orientation: ["W", "N/W", "WN/W"],
    optimalConditions: {
      wind: {

      },
      swell: {

      }
    },
    creationDate: new Date().toUTCString()
  })
};
export { spotFactory }