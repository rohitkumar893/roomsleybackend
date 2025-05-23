const mongoose = require("mongoose")
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
    })

    const Usermodel = mongoose.model("User", userSchema)

    module.exports = Usermodel;