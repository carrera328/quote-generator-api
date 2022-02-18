const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {

    try{
        const result = await pool.query( `SELECT * FROM public."quote"`);
        res.send(result.rows);
    } catch(err) {
        console.log(err);
    }
    
})

router.get('/cami', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM public."cami"`);
        res.send(result.rows);
    } catch(err) {
        console.log(err);
    }
})



module.exports = router;