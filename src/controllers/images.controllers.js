const catchError = require('../utils/catchError');
const Images = require('../models/Images');
const { uploadToCloudinary, deleteFromCloudinary } = require('../utils/cloudinary');

const getAll = catchError(async(req, res) => {
    const result = await Images.findAll()
    return res.json(result)
});

const create = catchError(async(req, res) => {
   const { url } = await uploadToCloudinary(req.file);
   const { projectId } = req.body;
   const images = await Images.create({ url, projectId })
   return res.status(201).json(images);
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const image = await Images.findByPk(id);
    await deleteFromCloudinary(image.url);
    await image.destroy();
    return res.sendStatus(204);
})

module.exports = {
    getAll,
    create,
    remove
}