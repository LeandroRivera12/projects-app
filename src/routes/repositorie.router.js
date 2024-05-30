const { getAll, create } = require('../controllers/repositorie.controllers');
const express = require('express');

const repositorieRouter = express.Router();

repositorieRouter.route('/repositorie')
    .get(getAll)
    .post(create)

module.exports = repositorieRouter;