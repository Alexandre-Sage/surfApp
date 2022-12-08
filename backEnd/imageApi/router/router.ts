import express, { Express } from "express"
import getProfilPictureRoute from "../routes/getUserProfilPicture"

export const highOrderRouter = () => {
  const router = express.Router()
  router.use(getProfilPictureRoute);

}