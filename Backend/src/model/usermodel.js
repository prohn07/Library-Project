
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    username: {
        type:String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true

    },

    email:{
        type:String,
        unique: true,
        required: true,
    }

});

var userModel = mongoose.model("user", userSchema);

module.exports = userModel;