const express = require('express');
const bodyParser = require('body-parser');

const contractRoute = require('./routes/contract.route');

const setupCorsMiddleware = require('./middlewares/cors');
const setupErrorsMiddleware = require('./middlewares/errors');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

setupCorsMiddleware(app);

app.use('/contract', contractRoute);

setupErrorsMiddleware(app);

app.listen(process.env.PORT || 3003, process.env.HOST || '0.0.0.0', () => {
	console.log(`Servidor em execução na http://localhost:3003`);
});
