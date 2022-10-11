const express = require('express');
const router = express.Router();
const client = require('../../db');
const {RequestError} = require('../../constants/errors');

router.use(express.json());

router.post('/quotes', async (req, res) => {   

    try {
        
        if (!Object.keys(req.body).includes('type')) {
            throw new RequestError(`Error: required property 'type' missing`);
        }
        
        const query = await client.query(`SELECT * FROM public."quotes" WHERE "type" = '${req.body.type}'`);
        res.send(query.rows);

    } catch (error) {
        let status;

        if (error instanceof RequestError) {
            status = 404;
        } else {
            status = 500;
        }

        res.status = status;
        
        res.send({error: {
            name: error.name,
            message: error.message 
        }});
    }
})


module.exports = router;