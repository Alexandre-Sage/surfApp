import { Model, Schema } from "mongoose";
import { ImageInterface, Images } from "../images/image";
import { SpotInterface } from "../spots/spotInterface";
import { UserInterface } from "../user/userInterface";

interface RepositoryParams {
  userId: UserInterface["_id"];
  imageData: ImageInterface;
  spotId: SpotInterface["_id"]
}

interface ImageRepositoryInterface {
  addUserImage: ({ }: RepositoryParams) => Promise<void>
  getUserImagesByUserId: ({ }: RepositoryParams) => Promise<ImageInterface[]>
}

export class ImageRepository implements ImageRepositoryInterface {
  constructor(private imageModel: Model<ImageInterface, {}, {}, {}, Schema<ImageInterface>>) {
    this.imageModel = imageModel;
  }
  addUserImage = async ({ userId, imageData }: Omit<RepositoryParams, "spotId">): Promise<void> => {
    const imageToSave = new Images<ImageInterface>({ ...imageData, userId });
    try {
      await this.imageModel.create(imageToSave)
    } catch (error: any) {
      console.log(error);
      throw error
    }
  };
  getUserImagesByUserId = async ({ userId }: { userId: UserInterface["_id"] }): Promise<ImageInterface[]> => {
    try {
      return await this.imageModel.find({ userId }, { path: 1, _id: 0, spotId: 0, userId: 0 });
    } catch (error) {
      throw error
    }
  };


  addSpotImage = async ({ imageData, spotId, userId }: RepositoryParams) => {
    const imageToSave = new Images<ImageInterface>({ ...imageData, userId, spotId });
    try {
      this.imageModel.create(imageToSave)
    } catch (error) {
      throw error;
    }
  };

  getSpotImagesBySpotId = async () => { };
  getSpotImagesByUserId = async () => { };
  deleteUserImage = async () => { };
  deleteSpotImage = async () => { };
}