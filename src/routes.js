const routes = require('express').Router();
const SessionsController = require('./app/controllers/SessionController')

routes.post('/sessions', SessionsController.store);


module.exports = routes;