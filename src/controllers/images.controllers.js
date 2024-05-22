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
   const image = await Images.create({ url, projectId })
   return res.status(201).json(image);
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const image = await Images.findByPk(id);
    await deleteFromCloudinary(image.url);
    await image.destroy();
    return res.sendStatus(204);
})

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
    remove, 
    update
}