const catchError = require('../utils/catchError');
const Technologies = require('../models/Technologies');
const { uploadToCloudinary } = require('../utils/cloudinary');

const getAll = catchError(async(req, res) => {
    const results = await Technologies.findAll()
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const { url } = await uploadToCloudinary(req.file);
    const { projectId } = req.body;
    const results = await Technologies.create({ url, projectId });
    return res.status(201).json(results)
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const tech = await Technologies.findByPk(id);
    await deleteFromCloudinary(tech.url);
    await tech.destroy();
    return res.sendStatus(204);
})

module.exports = {
    getAll,
    create,
    remove
}