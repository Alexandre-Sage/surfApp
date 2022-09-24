import express, { Request, Response } from "express";
import createSession from "./createNewSession/createSession";

const router = express.Router();
router.use(createSession);

export default router;