const { Router } = require('express');
const ticker = require('../db/models/ticker');

const router = Router();

router.get('/ticker', async(req, res) => {
    const fields = await ticker.read();
    res.json(fields);
})


module.exports = router;