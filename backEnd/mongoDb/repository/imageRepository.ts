import { Model, Schema } from "mongoose";
import { ImageInterface, Images } from "../images/image";
import { SpotInterface } from "../spots/spotInterface";
import { UserInterface } from "../user/userInterface";

interface RepositoryParams {
  userId: UserInterface["_id"];
  imageData: ImageInterface;
  spotId?: SpotInterface["_id"]
}

export interface ImageRepositoryInterface {
  addUserImage: ({ }: RepositoryParams) => Promise<void>
  getUserImagesByUserId: ({ }: RepositoryParams) => Promise<ImageInterface[]>
  addSpotImage: ({ }: RepositoryParams) => Promise<void>
  getSpotImagesBySpotId: (spotId: SpotInterface["_id"]) => Promise<ImageInterface[]>
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
      throw error
    }
  };
  getUserImagesByUserId = async ({ userId }: { userId: UserInterface["_id"] }): Promise<ImageInterface[]> => {
    return this.imageModel.find({ userId }, { path: 1, _id: 0, spotId: 1, userId: 1 })
  };


  addSpotImage = async ({ imageData, spotId, userId }: RepositoryParams) => {
    const imageToSave = new Images<ImageInterface>({ ...imageData, userId, spotId });
    try {
      this.imageModel.create(imageToSave)
    } catch (error) {
      throw error;
    }
  };

  getSpotImagesBySpotId = async (spotId: SpotInterface["_id"]) => {
    return this.imageModel.find({ spotId }, { path: 1, uploadDate: 1, spotId: 1, userId: 1 })
  };
  getSpotImagesByUserId = async () => { };
  deleteUserImage = async () => { };
  deleteSpotImage = async () => { };
}