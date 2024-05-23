const { getAll, create, remove, update } = require('../controllers/technologies.controllers');
const express = require('express');
const upload = require('../utils/multer.js');

const technologiesRouter = express.Router();

technologiesRouter.route('/technologies')
    .get(getAll)
    .post(upload.single('technologie'), create)


technologiesRouter.route('/technologies/:id')
     .delete(remove)
     .put(update)


module.exports = technologiesRouter;