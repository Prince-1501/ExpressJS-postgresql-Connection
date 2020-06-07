// first make a CREATE DATABASE todo_db;
// This is File where our database connection is there
// make a table name todo
//   \dl    \dt   \c   

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    database : 'todo_db'
  }
});

module.exports = knex;
