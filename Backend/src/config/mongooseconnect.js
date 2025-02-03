var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Librarydatabase").then((res)=>{

    console.log("successfully connected to data base")

}).catch((err)=>{

    console.log(err)
});