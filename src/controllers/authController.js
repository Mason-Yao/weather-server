const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    const {firstName, lastName, username, password} = req.body;
    try {
        const existingUser = await User.findOne({username})
        if (existingUser) {
            return res.status(409).json({message: "User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            cities: []
        })
        const user = await newUser.save();
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "600s"})
        res.status(201).json({ message: "User registered successfully.", token});
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error" });
    }
}

exports.login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username})
        if (!user) {
           return res.status(404).json({message: "User not found"})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
           return res.status(403).json({message: "Incorrect password"})
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1800s"})
        res.status(200).json({ message: "User logged in successfully.", token, user });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error" });
    }
}

exports.googleLoginCallback = (req, res) => {
    const user = req.user;
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1800s"})
    res.redirect(`http://localhost:3000/login?token=${token}&user=${JSON.stringify(user)}`);
}

