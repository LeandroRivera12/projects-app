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

module.exports = {
    getAll,
    create,
}