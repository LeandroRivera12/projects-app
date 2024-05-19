const { getAll, create, getOne, remove, update } = require('../controllers/projects.controllers');
const express = require('express');

const projectsRouter = express.Router();

projectsRouter.route('/projects')
    .get(getAll)
    .post(create);

projectsRouter.route('/projects/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = projectsRouter;