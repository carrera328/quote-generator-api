const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: 'pi',
  host: '192.168.1.30',
  database: 'pi',
  password: 'Kepler.22b',
  port: 5432,
})
console.log(pool);
module.exports = pool;