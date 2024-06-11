const winston = require('winston');

const loggerModule = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logfile.log' })
    ]
});

exports.module = { loggerModule };