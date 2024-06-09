const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const { log } = require('console');
const webRoutes = require('./routes/web');
const connection = require('./config/db');

console.log(process.env);
connection.query('SELECT * FROM users', function(error, results, fields) {
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