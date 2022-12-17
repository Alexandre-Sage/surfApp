import express, { Request, Response } from 'express';
const router = express.Router()

router.post(`/url`, function (req: Request, res: Response) {
  const { } = req.body;
  try {

    res.status(200).json({

    });
  } catch (error) {
    res.status(666).json({

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