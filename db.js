const {Pool, Client } = require('pg');
require('dotenv').config();

// regular postgres db
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

// heroku postgres
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

module.exports = pool;
module.exports = client;