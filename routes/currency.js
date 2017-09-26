const { Router } = require('express');
const currency = require('../db/models/currency');

const router = Router();

router.get('/currency', async(req, res) => {
    const fields = await currency.read();
    res.json(fields);
})


module.exports = router;