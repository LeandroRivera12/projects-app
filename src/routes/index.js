const express = require('express');
const router = express.Router();
const imageRouter = require('./images.router')
const projectsRouter = require('./projects.router')
const technologiesRouter = require('./technologies.router')

// colocar las rutas aquí
router.use(imageRouter)
router.use(projectsRouter)
router.use(technologiesRouter)


module.exports = router;