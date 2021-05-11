const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: process.env.AWS,
  host: process.env.HOST,
  database: 'postgres',
  password: process.env.PASSWORD,
  port: 5432,
})
//console.log(pool);
module.exports = pool;