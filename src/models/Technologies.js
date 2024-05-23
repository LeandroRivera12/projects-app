const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Technologies = sequelize.define('technologies', {
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Technologies;