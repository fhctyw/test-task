const sequelize = require("../../config/db");
const OrganizationPackage = require("../models/organization-package");
const OrganizationPackageCategory = require("../models/organization-package-category");
const OrganizationPackageCategoryName = require("../models/organization-package-name");

const getAllOrganizationPackages = async () => {
    try {
        const packages = await OrganizationPackage.findAll({
            include: [{
                model: OrganizationPackageCategory,
                include: {
                    model: OrganizationPackageCategoryName
                }
            }]
        });
        return packages;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const createOrganizationPackage = async (name, description, price, categories) => {
    if (!name) {
        throw new Error("Name must be not empty");       
    }
    if (!description) {
        throw new Error("Description must be not empty");
    }
    if (!price || price <= 0) {
        throw new Error('Price must be greater than zero');
    }

    const t = await sequelize.transaction();
    try {
        // TODO: check if categories exist

        const createdPackage = await OrganizationPackage.create({
            name,
            description,
            price
        }, { transaction: t });

        const categoryAssosiations = categories.map(category_id => ({
            organization_package_id: createdPackage.id,
            organization_package_category_name_id: category_id
        }));

        await OrganizationPackageCategory.bulkCreate(categoryAssosiations, { transaction: t });

        await t.commit();

        return createdPackage;

    } catch (error) {
        await t.rollback();
        console.error(error);
        throw error;
    }
};

module.exports = {
    getAllOrganizationPackages,
    createOrganizationPackage
};
