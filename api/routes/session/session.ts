import express, { Request, Response } from "express";
import createSession from "./createNewSession/createSession";
import getAllSessions from "./getAllSessions/getAllSessions";
const router = express.Router();
router.use(createSession);
router.use(getAllSessions);
export default router;