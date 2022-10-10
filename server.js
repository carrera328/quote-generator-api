const quoteRoute = require('./routes/quoteRouter');
const express = require('express');
const cors = require('cors');
const https = require('https');
require('dotenv').config();
const port = process.env.PORT || 3090;

const fs = require('fs');

const app = express();

const options = {
    key: fs.readFileSync('./ssl/cert/key.pem'),
    cert: fs.readFileSync('./ssl/cert/cert.pem')
  };


app.use(cors());
app.use('/', quoteRoute);
app.use(express.json());



app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
