const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Projects = sequelize.define('projects', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    technologies: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

module.exports = Projects;