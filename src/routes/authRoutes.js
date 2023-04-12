const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
// This request will check if the user exists and add it into database if not
router.post("/register", authController.register);
// This request will check log in information, return status 401 and "Unauthorized" message if failed, or generate
// token and send back if success.
router.post("/login", authController.login);
// /google visiting from frontend will be redirected to google login page by calling passport google strategy
router.get("/google", authMiddleware.authenticateGoogle);
// the google authentication callback will be redirected to this path, and the user information will be stored in req.user
router.get("/google/user", authMiddleware.authenticateGoogleCallback, authController.googleLoginCallback);

module.exports = router;