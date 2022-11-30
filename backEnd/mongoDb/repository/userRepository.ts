import { MongoServerError } from "mongodb";
import { Model, Schema } from "mongoose";
import { CustomError } from "../../sharedModules/errors/errorClass";
import { UserInterface } from "../user/userInterface";
import { User } from "../user/users";

function mongoErrorHandling(error: MongoServerError) {
  switch (error.code) {
    case 11000:
      const fieldValue = Object.entries(error.keyValue)[0];
      const ReturnedError = new CustomError(
        `The ${fieldValue[0]} ${fieldValue[1]} is already used.`,
        "ADD MONGO DOCUMENT ERROR SWITCH",
        400
      );
      return ReturnedError
      break;
  };
};

interface UserRepositoryInterface {
  createNewUser: ({ newUserData }: { newUserData: UserInterface }) => Promise<void | Error>
  getUserData: ({ email }: { email: string }) => Promise<UserInterface | null>
}

export class UserRepository implements UserRepositoryInterface {
  constructor(private userModel: Model<UserInterface, {}, {}, {}, Schema<UserInterface>>) {
    this.userModel = userModel;
  }

  createNewUser = async ({ newUserData }: { newUserData: UserInterface }): Promise<any | Error> => {
    const newUserDocument = new User<UserInterface>(newUserData);
    try {
      await newUserDocument.hashPassword(newUserDocument.password);
      await this.userModel.create(newUserDocument);
    } catch (error: any) {
      throw mongoErrorHandling(error);
    }
  };

  getUserData = async ({ email }: { email: string }): Promise<UserInterface | null> => {
    try {
      return await this.userModel.findOne({ email })
    } catch (error) {
      throw error
    }
  };

  updateUserData = () => { };
}