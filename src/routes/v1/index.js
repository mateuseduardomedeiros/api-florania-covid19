require('dotenv/config');
const routes = require('express').Router();
const appName = process.env.APP_NAME

routes.get('/', (req, res) => res.json({ message: `${appName} API V1` }));

routes.use('/util', require('./util'));
routes.use('/registros', require('./registro'));

module.exports = routes;
