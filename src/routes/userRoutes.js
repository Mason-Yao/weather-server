const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware.authenticateLogin, userController.getUser);
router.put("/cities", authMiddleware.authenticateLogin, userController.updateUserCities);

module.exports = router;