const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: 'pi',
  host: 'www.dashcatsoftware.com',
  database: 'pi',
  password: 'Kepler.22b',
  port: 5432,
})
console.log(pool);
module.exports = pool;