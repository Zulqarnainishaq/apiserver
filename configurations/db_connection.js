// dbConnection.js
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// Configure database connection details
const dbConfig = {
  host: process.env.HOST, 
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT // default MySQL port
};
console.log(dbConfig);
// Create a connection
const pool = mysql.createPool(dbConfig).promise();
module.exports = pool;
