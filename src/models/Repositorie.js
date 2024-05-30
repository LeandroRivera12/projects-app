const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Repositorie = sequelize.define('repositorie', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Repositorie;