const express = require('express');
require('dotenv').config();
// const commonRoute = require('./src/routes/common.router');
const dbConnection = require('./config/dbConfig');
const route = require('./src/routes/route');

const app = express();


const port = 5000;
const logger = require('./middlewares/logger');

app.use(express.json());
app.use('/app', route);

// dbConnection.connect("")

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // logger.info("Servee connected sucessfully");
    // logger.warn('Connected!')
})

