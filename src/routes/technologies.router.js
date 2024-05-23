const { getAll, create } = require('../controllers/technologies.controllers');
const express = require('express');
const upload = require('../utils/multer.js');

const technologiesRouter = express.Router();

technologiesRouter.route('/technologies')
    .get(getAll)
    .post(upload.single('technologie'), create)

module.exports = technologiesRouter;