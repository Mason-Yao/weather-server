const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");
const authMiddleware = require("../middleware/authMiddleware")

// get single city's weather data with the following requests.
// when users use this path to get weather data without authentication, code 401 and message "Unauthorized" will return.
router.get("/:city/forecast", authMiddleware.authenticateLogin, weatherController.getWeather("forecast"));

module.exports = router;