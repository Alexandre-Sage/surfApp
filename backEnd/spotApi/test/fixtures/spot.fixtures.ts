import { Types } from "mongoose";

const spotFactory = (userId: Types.ObjectId) => ({
  spotName: "port blanc",
  country: "France",
  userId,
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
});
export { spotFactory }