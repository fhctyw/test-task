const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const OrganizationPackageCategoryName = sequelize.define('OrganizationPackageCategoryName', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
}, { underscored: true, timestamps: false });

module.exports = OrganizationPackageCategoryName;
