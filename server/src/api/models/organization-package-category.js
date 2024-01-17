const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const OrganizationPackageCategoryName = require('./organization-package-name');
const OrganizationPackage = require('./organization-package');

const OrganizationPackageCategory = sequelize.define('OrganizationPackageCategory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    organization_package_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'OrganizationPackage',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    organization_package_category_name_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'OrganizationPackageName',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, { underscored: true, timestamps: false });

OrganizationPackageCategoryName.hasMany(OrganizationPackageCategory, { foreignKey: 'organization_package_category_name_id' });
OrganizationPackageCategory.belongsTo(OrganizationPackageCategoryName, { foreignKey: 'organization_package_category_name_id' });

OrganizationPackage.hasMany(OrganizationPackageCategory, { foreignKey: 'organization_package_id' });
OrganizationPackageCategory.belongsTo(OrganizationPackage, { foreignKey: 'organization_package_id' });

module.exports = OrganizationPackageCategory;