const express = require('express');
const router = express.Router();
const client = require('../db');



router.get('/casey', async (req, res) => {
    try{
        const result = await client.query( `select * from public."quotes" where "type" = 'funny'`);
        console.log(result);
        res.send(result.rows);
    } catch(err) {
        res.send(err);
    }
})

module.exports = router;