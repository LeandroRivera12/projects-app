const { getAll, create, remove } = require('../controllers/technologies.controllers');
const express = require('express');
const upload = require('../utils/multer.js');

const technologiesRouter = express.Router();

technologiesRouter.route('/technologies')
    .get(getAll)
    .post(upload.single('technologie'), create)


technologiesRouter.route('/technologies/:id')
     .delete(remove)


module.exports = technologiesRouter;