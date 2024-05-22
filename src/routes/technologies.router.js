const { getAll, create } = require('../controllers/technologies.controllers');
const express = require('express');
const upload = require('../utils/multer')

const technologiesRouter = express.Router();

technologiesRouter.route('/technologies')
    .get(getAll)
    .post(upload.single('technologies'), create)

module.exports = technologiesRouter;