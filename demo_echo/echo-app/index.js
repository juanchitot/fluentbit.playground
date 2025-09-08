
const express = require('express');
const { createLogger, transports, format } = require('winston');
const app = express();

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.json()    
  ),
  transports: [
    new transports.File({
      filename: './logs.log',
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ]
});
app.use(express.json({ type: '*/*' }));

app.get('/success', ({ params }, res) => {
    logger.info("Request processed succesfully")
    return res.status(200).send({
        msg: "App Success"
    });
});

app.get('/fail', ({ params },res) => {
    logger.error("Request failed")
    return res.status(404).send({ error: 'App Error' });
});


module.exports = app
