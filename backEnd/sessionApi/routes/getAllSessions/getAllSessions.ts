import express, { Request, Response } from "express";
import getAllDocument from "../../../sharedModules/mongoDb/getAllDocument";
import { UserSession } from "../../../mongoDb/sessions/sessions";

const router = express.Router();

router.get("/getAllSessions", async function (req: Request, res: Response): Promise<Response> {
  //const session: Session = req.session;
  const researchObject = { userId: session.userId };
  try {
    //await sessionChecking(req, session);
    const sessionDocument = await getAllDocument(UserSession, researchObject);
    console.log(sessionDocument);
    return res.status(200).json(sessionDocument);
  } catch (error: any) {
    console.log(error);
    return res.status(error.httpStatus).json({
      message: error.message,
      error: true
    });
  };
});

export default router;