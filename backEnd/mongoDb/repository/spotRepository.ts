import { Model, Schema } from "mongoose";
import { CustomError } from "../../sharedModules/errors/errorClass";
import { ImageInterface } from "../images/image";
import { Spot } from "../spots/spot";
import { SpotInterface } from "../spots/spotInterface";
import { UserInterface } from "../user/userInterface";

interface SpotRepositoryInterface {
  getSpotsByUserId: ({ }: { userId: UserInterface["_id"], selectedField: Object }) => Promise<SpotInterface[]>
  createNewSpot: ({ }: { newSpotData: SpotInterface, userId: UserInterface["_id"] }) => Promise<void>;
  getSpotById: ({ }: { spotId: SpotInterface["_id"], selectedField?: Object }) => Promise<SpotInterface | null>
}


export class SpotRepository implements SpotRepositoryInterface {
  constructor(private spotModel: Model<ImageInterface, {}, {}, {}, Schema<ImageInterface>>) {
    this.spotModel = spotModel;
  }

  createNewSpot = async ({ newSpotData, userId }: { newSpotData: SpotInterface, userId: UserInterface["_id"] }): Promise<void> => {
    try {
      const newSpotDocument = new Spot<SpotInterface>({
        userId,
        ...newSpotData
      })
      this.spotModel.create(newSpotDocument)
    } catch (error) {
      throw new CustomError("Something went wrong please retry", "CREATE NEW SPOT ERROR", 500)
    }
  };
  getSpotsByUserId = async ({ userId, selectedField }: { userId: UserInterface["_id"], selectedField: Object }): Promise<SpotInterface[]> => {
    try {
      return await this.spotModel.find({ userId }, { ...selectedField })
    } catch (error) {
      throw new CustomError("Something went wrong please retry", "GET SPOTS BY USER ID", 500)
    }
  };
  getSpotById = async ({ spotId, selectedField }: { spotId: SpotInterface["_id"], selectedField?: Object }): Promise<SpotInterface> => {
    try {
      return await this.spotModel.findById(spotId, { ...selectedField }) as SpotInterface;
    } catch (error) {
      throw new CustomError("Something went wrong please retry", "GET SPOT BY USER ID", 500)
    }
  };
  //TEST ONLY
  getSpotBySpotName = async (spotName: string) => await this.spotModel.findOne({ spotName })
}