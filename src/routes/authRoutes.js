const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
// This request will check if the user is existed and add it into database if not
router.post("/register", authController.register);
// This request will check log in information, return status 401 and "Unauthorized" message if failed, or generate
// token and send back if success.
router.post("/login", authController.login);

module.exports = router;