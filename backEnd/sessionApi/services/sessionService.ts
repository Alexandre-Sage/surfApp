import { SessionRepository } from "../../mongoDb/repository/sessionRepository";
import { SessionInterface } from "../../mongoDb/sessions/sessionInterface";
import { UserInterface } from "../../mongoDb/user/userInterface";


export class SessionService {
  private readonly validator: any
  constructor(private readonly repository: SessionRepository) {
    this.repository = repository;

  };
  create = async ({ userId, newData }: { userId: UserInterface["_id"], newData: SessionInterface }) => {
    this.repository.create({ userId, newData });
  };
}
