const Projects = require('./Projects');
const Images = require('./Images');

Projects.hasMany(Images);
Images.belongsTo(Projects);