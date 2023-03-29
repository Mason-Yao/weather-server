const User = require("../models/userModel")

exports.getUser = (req, res) => {
    if (req.user) {
        console.log(req.user)
        res.status(200).json(req.user)
    }
}

exports.updateUserCities = async (req, res) => {
    console.log(req.body)
    if(req.body.cities && req.body.cities.length > 10) {
        res.status(422).json({message: "You can only save up to 10 cities"})
        return
    }
    try {
        const updatedUser = await User.findOneAndUpdate({username: req.body.username}, {cities: req.body.cities}).exec()
        res.status(200).json(updatedUser)
        return
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Server error"})
    }
}