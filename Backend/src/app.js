
var express = require("express");
var app = express();
require("./config/mongooseconnect.js")
var userRoute = require("./routes/users.js");
const cors = require("cors")




app.use(express.json());

app.use("/user", userRoute)

//rohan



app.use(cors({
    origin: "http://localhost:5174", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // If you need to send cookies or authentication headers
}));





app.listen("8888", ()=>{console.log("server started successfully")});