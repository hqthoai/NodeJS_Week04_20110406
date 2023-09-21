const express = require('express'); 
const route = require('./routes');
const morgan = require('morgan');
const logger = require('./middlewares/logger');

const port = 5000;
const app = express();

// // logger
// app.use(morgan('combined'));

app.use(logger);

app.use(express.json());

route(app);

app.listen(port , ()=> console.log(`Server is listen on http://localhost:${port}`));
