const router = require('express').Router();
const propertyController = require("../controllers/propertyController");

router.post('/create-property', propertyController.createProperty)

module.exports = router;