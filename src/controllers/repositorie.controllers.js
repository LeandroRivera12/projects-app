const catchError = require('../utils/catchError');
const Repositorie = require('../models/Repositorie');
const { uploadToCloudinary } = require('../utils/cloudinary');

const getAll = catchError(async(req, res) => {
    const results = await Repositorie.findAll()
    return res.json(results)
});

const create = catchError(async(req, res) => {
    const { url } = uploadToCloudinary(req.file);
    const results = await Repositorie.create({ url });
    return res.status(201).json(results);
})

module.exports = {
    getAll,
    create
}