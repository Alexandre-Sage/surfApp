import { model, Schema, Types } from "mongoose";

export interface ImageInterface {
  userId: string,
  spotId?: string
  uploadDate: Date
}
const ImageSchema = new Schema<ImageInterface>({
  userId: { type: String, required: true },
  spotId: { type: String, required: false },
  uploadDate: { type: Date, default: Date.now, required: true }
});

const Images = model<ImageInterface>("Image", ImageSchema);
export { Images, ImageSchema };