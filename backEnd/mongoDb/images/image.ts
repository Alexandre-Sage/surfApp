import { ObjectId } from "mongodb";
import { Model, model, Models, Schema, Types } from "mongoose";
import { SpotInterface } from "../spots/spotInterface";
import { UserInterface } from "../user/userInterface";

export interface ImageInterface {
  userId?: UserInterface["_id"];
  spotId?: SpotInterface["_id"];
  uploadDate: Date;
}
const ImageSchema = new Schema<ImageInterface>({
  userId: { type: String, required: true },
  spotId: { type: String, required: false },
  uploadDate: { type: Date, default: Date.now, required: true }
});

const Images = model<ImageInterface>("Image", ImageSchema);
export { Images, ImageSchema };