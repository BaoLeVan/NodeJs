const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});

console.log(process.env.DB_PASSWORD);
module.exports = connection;