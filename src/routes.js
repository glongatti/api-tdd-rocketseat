const routes = require('express').Router();
const SessionsController = require('./app/controllers/SessionController')

const authMiddleware = require('../src/app/middleware/auth')

routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);
routes.get('/dashboard', (req, res) => {
    return res.status(200).send();
})

module.exports = routes;