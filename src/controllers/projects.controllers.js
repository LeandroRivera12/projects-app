const catchError = require('../utils/catchError');
const Projects = require('../models/Projects');
const Images = require('../models/Images');

const getAll = catchError(async(req, res) => {
    const results = await Projects.findAll({ include: [Images]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Projects.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Projects.findByPk(id, {include: [Images]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Projects.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Projects.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}