const Projects = require('./Projects');
const Images = require('./Images');
const Technologies = require('./Technologies');
const Repositorie = require('./Repositorie');

Projects.hasMany(Images);
Images.belongsTo(Projects);

Projects.hasMany(Technologies);
Technologies.belongsTo(Projects);

Projects.hasMany(Repositorie);
Repositorie.belongsTo(Projects);