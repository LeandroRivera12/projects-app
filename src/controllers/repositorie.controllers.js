const catchError = require('../utils/catchError');
const Repositorie = require('../models/Repositorie');

const getAll = catchError(async(req, res) => {
    const results = await Repositorie.findAll()
    return res.json(results)
});

const create = catchError(async(req, res) => {
    const { projectId, url } = req.body;
    const result = await Repositorie.create({projectId, url});
    return res.status(201).json(result);
})

module.exports = {
    getAll,
    create
}