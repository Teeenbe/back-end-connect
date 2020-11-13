const { Pool } = require("pg");

const pool = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (sql, values, cb) => {
    return pool.query(sql, values, cb);
  },
};
