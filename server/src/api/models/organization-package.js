const sequleize = require('../../config/db');
const { DataTypes } = require('sequelize');

const OrganizationPackage = sequleize.define('OrganizationPackage', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }
}, { underscored: true, timestamps: false });

module.exports = OrganizationPackage;