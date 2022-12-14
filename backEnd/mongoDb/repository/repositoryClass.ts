import { Model, Schema, Document, Types } from "mongoose";
import { Spot } from "../spots/spot";
import { UserInterface } from "../user/userInterface";

type RepositoryModel = Model<unknown, {}, {}, {}, Schema<unknown>>
type _Id = Types.ObjectId
declare interface RepositoryInterface {
  create: ({ }: { userId: UserInterface["_id"], dataToAdd: unknown }) => Promise<void>;
  getAll: ({ }: { userId: UserInterface["_id"] }) => Promise<Document[]>;
  getById: ({ }: { _id: _Id, userId: UserInterface["_id"] }) => Promise<Document | null>;
  update: ({ }: { _id: _Id, userId: UserInterface["_id"], dataToUpdate: any }) => Promise<void>
}

export class Repository implements RepositoryInterface {
  constructor(readonly model: RepositoryModel) {
    this.model = model;
  };
  create = async ({ userId, dataToAdd }: { userId: UserInterface["_id"]; dataToAdd: any; }) => {
    const newDocument = new this.model({
      ...dataToAdd,
      userId
    });
    this.model.create(newDocument);
  };
  getAll = async ({ userId }: { userId: UserInterface["_id"] }) => {
    return this.model.find({ userId });
  };
  getById = async ({ _id, userId }: { _id: _Id, userId: UserInterface["_id"] }) => {
    return this.model.findOne({ _id, userId });
  };
  update = async ({ _id, dataToUpdate, userId }: { _id: _Id, userId: UserInterface["_id"], dataToUpdate: any }) => {
    this.model.findOneAndUpdate({ _id, userId }, {
      ...dataToUpdate,
      userId
    });
  };
  delete = () => { }
};

export class MyThing extends Repository {
  constructor(readonly model: RepositoryModel) {
    super(model)
    this.model = model;
  }
}
