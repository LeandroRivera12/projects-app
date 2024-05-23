const catchError = require('../utils/catchError');
const Technologies = require('../models/Technologies');
const { uploadToCloudinary, deleteFromCloudinary } = require('../utils/cloudinary');

const getAll = catchError(async(req, res) => {
    const results = await Technologies.findAll()
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const { img } = await uploadToCloudinary(req.file);
    const { projectId } = req.body;
    const results = await Technologies.create({ img, projectId });
    return res.status(201).json(results)
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const tech = await Technologies.findByPk(id);
    await deleteFromCloudinary(tech.img);
    await tech.destroy();
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