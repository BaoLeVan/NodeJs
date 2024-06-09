const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const { log } = require('console');
const webRoutes = require('./routes/web')

// conection sql
const mysql = require('mysql2');

const connection  = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test',
});

connection.query('SELECT * FROM users', function(error, results, fields) {
  console.log("result" + results);
  console.log("result" +fields);
	if(error)
		throw error;
		results.forEach(result => {
			console.log(result);
		});
});


// config .env
require('dotenv').config();
const port = process.env.PORT || 8880;
const hostname = process.env.HOST_NAME;

app.use(morgan('combined'))

// cofig template engine
configViewEngine(app);

app.use('/',webRoutes);




app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})