const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        "googleId": String,
        "firstName": {
            type: String,
            require: true
        },
        "lastName": {
            type: String,
            require: true
        },
        "username": {
            type: String,
            require: true
        },
        "password": {
            type: String,
        },
        "cities": {
            type: [String]
        }
    },
    {strict: true,
        strictQuery: false
    }
);

const User = new mongoose.model("User", userSchema);
module.exports = User;
