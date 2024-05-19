const express = require('express');
const router = express.Router();
const imageRouter = require('./images.router')
const projectsRouter = require('./projects.router')

// colocar las rutas aquí
router.use(imageRouter)
router.use(projectsRouter)


module.exports = router;