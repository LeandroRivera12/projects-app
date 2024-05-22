const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Technologies = sequelize.define('technologies', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Technologies;