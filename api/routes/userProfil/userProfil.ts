import express from 'express';
const router = express.Router();

router.get("/", function (req, res) {
    const session = req.session;

});

export default router;