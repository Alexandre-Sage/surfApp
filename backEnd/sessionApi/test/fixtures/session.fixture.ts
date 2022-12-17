import { SpotInterface } from "../../../mongoDb/spots/spotInterface";
import { UserInterface } from "../../../mongoDb/user/userInterface";
const sessionFactory = ({ spotId, userId }: { userId: UserInterface["_id"], spotId: SpotInterface["_id"] }) => ({
  userId,
  date: new Date().toUTCString(),
  spotId,
  startTime: new Date().toUTCString(),
  endTime: new Date().toUTCString(),
  totalTime: new Date().toUTCString(),
  swell: {
    size: "2m",
    period: "12s",
    orientation: "NO"
  },
  wind: {
    strength: "12knot",
    orientation: "E"
  },
  comment: "Something to say about"
});

export { sessionFactory }