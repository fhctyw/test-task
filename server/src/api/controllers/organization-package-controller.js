const OrganizationPackageService = require('../services/organization-package-service');

exports.getAllOrganizationPackages = async (req, res) => {
    try {
        const packages = await OrganizationPackageService.getAllOrganizationPackages();
        res.json(packages);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createOrganizationPackage = async (req, res) => {
    try {
        const { name, description, price, categories } = req.body;
        console.log(`Controller arguments: ${name}, ${description}, ${price}, ${categories}`);

        const createdPackage = await OrganizationPackageService.createOrganizationPackage(name, description, price, categories);

        res.status(200).json(createdPackage);

    } catch (error) {
        res.status(500).send(error.message);
    }
};