const Projects = require('./Projects');
const Images = require('./Images');
const Technologies = require('./Technologies')

Projects.hasMany(Images);
Images.belongsTo(Projects);

Projects.hasMany(Technologies);
Technologies.belongsTo(Projects)