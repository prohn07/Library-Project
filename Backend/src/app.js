
var express = require("express");
var app = express();
require("./config/mongooseconnect.js")
var userRoute = require("./routes/users.js");
const cors = require("cors")


app.use(cors());

app.use(express.json());

app.use("/user", userRoute)

//rohan









app.listen("8888", ()=>{console.log("server started successfully")});