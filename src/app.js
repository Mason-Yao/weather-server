require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");


const authRoutes = require("./routes/authRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const userRoutes = require("./routes/userRoutes")
const passportConfig = require("./config/passportConfig");

const app = express();
app.use(express.json());

const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000"
const mongoPath = process.env.MONGO_PATH || "mongodb://localhost:27017/weather-app"
console.log("corsOrigin: ", corsOrigin);
console.log("mongoPath: ", mongoPath);

// app.use(cors({origin: [corsOrigin]}));
app.use(cors());

app.use(passport.initialize());
passportConfig(passport);

mongoose.connect(mongoPath, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

app.use("/auth", authRoutes);
app.use("/weather", weatherRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 13000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));