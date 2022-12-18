import express, { Request, Response } from 'express';
import { Validator } from 'express-json-validator-middleware';
import { SessionSchema } from '../../../mongoDb/sessions/sessions';
import { SpotInterface } from '../../../mongoDb/spots/spotInterface';
import { getToken, sessionTokenAuthentification } from '../../../sharedModules/jwt/jwtManagement';
import { service } from '../../server';
import { sessionBodyValidationSchema } from './validationSchema';
const router = express.Router()


const { validate } = new Validator({});

const validateNewSpotData = (spot: Partial<SpotInterface>) => {

}

router.post(`/`, async function (req: Request, res: Response) {
  const { newSessionData } = req.body;
  const token = getToken(req)
  const { userId } = (await sessionTokenAuthentification(`${token}`));
  console.log(newSessionData)
  try {
    await sessionBodyValidationSchema.validateAsync(newSessionData)
    await service.create({ userId, newData: newSessionData })
    res.status(201).json({
      error: false,
      message: "New session created with sucess"
    });
  } catch (error: any) {
    console.log(error)
    res.status(400).json({
      error: true
    });
  };
});

router.get(`/url`, function (req: Request, res: Response) {
  try {

    res.status(200).json({

    });
  } catch (error) {
    res.status(666).json({

    });
  };
});

router.get(`/url/:id`, function (req: Request, res: Response) {
  try {

    res.status(200).json({

    });
  } catch (error) {
    res.status(666).json({

    });
  };
});

router.put(`/url/:id`, function (req: Request, res: Response) {
  const { } = req.body;
  try {

    res.status(200).json({

    });
  } catch (error) {
    res.status(666).json({

    });
  };
});

router.delete(`/url/:id`, function (req: Request, res: Response) {
  try {

    res.status(200).json({

    });
  } catch (error) {
    res.status(666).json({

    });
  };
});

export { router }