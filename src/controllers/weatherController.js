const axios = require("axios");
const cache = require("../utils/cache");


exports.getWeather = (weatherStatus) => (async (req, res) => {
    const cityName = req.params.city;
    if (cache.has(cityName)) {
        res.status(200).json(cache.get(cityName))
        return;
    }
    try {
        const response = await axios
            .get(`https://api.weatherapi.com/v1/${weatherStatus}.json?key=${process.env.WEATHER_API_KEY}&q=${cityName}&days=10&aqi=no`)
        // store the response in cache for 2 minutes
        cache.set(cityName, {...response.data, cityAlias: cityName}, 2 * 60 *1000)
        res.status(200).json({...response.data, cityAlias: cityName})
    } catch (err) {
        if (err.response.status === 400) {
            res.status(400).json({cityAlias: cityName, message: "City not found"})
            return;
        }
        res.status(500).json({cityAlias: cityName, message: "Server error"})
    }
})


