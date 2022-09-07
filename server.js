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


app.use(cors({
  origin: '*'
}));
app.use('/', quoteRoute);
app.use(express.json());

// https.createServer(options, function (req, res) {
//     res.writeHead(200);
//     res.end("hello world\n");
//   }).listen(8000);

// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// })


https
  .createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
    {
      key: fs.readFileSync("ssl/cert/key.pem"),
      cert: fs.readFileSync("ssl/cert/cert.pem"),
    },
    app
  )
  .listen(4000, () => {
    console.log("serever is runing at port 4000");
  });