import { Model, Schema, Types } from "mongoose";
import { SessionInterface } from "../sessions/sessionInterface";
import { UserInterface } from "../user/userInterface";

export interface SessionRepositoryInterface {
  create: ({ }: { userId: UserInterface["_id"], newSession: SessionInterface }) => Promise<void>;
  getAll: (userId: UserInterface["_id"]) => Promise<SessionInterface[]>;
  getById: ({ }: { userId: UserInterface["_id"], sessionId: SessionInterface["_id"] }) => Promise<SessionInterface>;
  update: ({ }: { userId: UserInterface["_id"], sessionId: SessionInterface["_id"], updatedSession: SessionInterface }) => Promise<void> | null;
  delete: ({ }: { userId: UserInterface["_id"], sessionId: SessionInterface["_id"] }) => Promise<void>;
}

export class SessionRepository implements SessionRepositoryInterface {
  constructor(private sessionModel: Model<SessionInterface, {}, {}, {}, Schema<SessionInterface>>) {
    this.sessionModel = sessionModel;
  }
  create = async ({ newSession, userId }: { userId: Types.ObjectId; newSession: SessionInterface; }) => {

  };
  getAll = async (userId: UserInterface["_id"]) => {
    return this.sessionModel.find({ userId: userId });
  }
  getById = async ({ sessionId, userId }: { userId: Types.ObjectId; sessionId: Types.ObjectId; }) => {
    return this.sessionModel.findOne({ _id: sessionId, userId }) as unknown as SessionInterface
  };
  update = async ({ sessionId, userId, updatedSession }: { sessionId: SessionInterface["_id"], userId: UserInterface["_id"], updatedSession: SessionInterface }) => {
    this.sessionModel.findOneAndUpdate({ _id: sessionId, userId })
  }
  delete = async ({ }: { userId: Types.ObjectId; sessionId: Types.ObjectId; }) => { };
}