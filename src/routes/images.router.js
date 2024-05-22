const { getAll, create, remove, update } = require('../controllers/images.controllers');
const express = require('express');
const upload = require('../utils/multer');


const imageRouter = express.Router();

imageRouter.route('/images')
    .get(getAll)
    .post(upload.single('image'), create)

imageRouter.route('/images/:id')
    .delete(remove)
    .put(update)

module.exports = imageRouter;