const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const { log } = require('console');
const webRoutes = require('./routes/web')


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