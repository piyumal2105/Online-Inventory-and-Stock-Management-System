const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },

    age: {
        type: String,
        required: [true, "Please add a age"]
    },

    gender: {
        type: String,
        required: [true, "Please add a gender"]
    },

    email: {
        type: String,
        required: [true, "Please add a email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },

    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: [6, "Password must be up to 6 characters"],
        maxLength: [15, "Password must not be more than 15 characters"],
    },

    photo: {
        type: String,
        required: [true, "Please add a photo"],
        default: "https://i.ibb.co/4pDNDk1/avatar.png"
    },

    phone: {
        type: String,
        required: [true, "Please add a photo"],
        default: "+94"
    },

    bio: {
        type: String,
        maxLength:[250, "Bio must not be more than 250 characters"],
        default: "bio"
    }
}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema);
module.exports = User;