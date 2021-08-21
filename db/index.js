const { Pool } = require('pg');

const config = {};
if (process.env.environment === 'prod') {
  config.ssl = true;
}

const pool = new Pool(config);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
