const quoteRoute = require('./routes/quoteRouter');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3090;

const app = express();
app.use(cors);
app.use('/', quoteRoute);
app.use(express.json());

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

