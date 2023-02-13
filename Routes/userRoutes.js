const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

// Register user data API
router.post("/user/register", userCtrl.register);
router.post("/user/login", userCtrl.login);

module.exports = router;