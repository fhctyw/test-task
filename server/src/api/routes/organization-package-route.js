const express = require('express');
const router = express.Router();
const { getAllOrganizationPackages, createOrganizationPackage } = require('../controllers/organization-package-controller');

router.get('/organization-packages', getAllOrganizationPackages);
router.post('/create-organization-packages', createOrganizationPackage);

module.exports = router;