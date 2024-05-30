const { getAll } = require('../controllers/controllerFile');
const express = require('express');

const repositorieRouter = express.Router();

repositorieRouter.route('/ruta')
    .get(getAll)

module.exports = repositorieRouter;