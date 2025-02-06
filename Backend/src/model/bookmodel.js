var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
        unique:true
    },
    Author:{
        type:String,
        required:true,
    },
    Description: String
});



var bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;