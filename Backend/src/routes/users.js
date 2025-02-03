var express = require("express");

var userModel = require("../model/usermodel.js")

var route = express.Router();


route.post("/postuser", async (req, res)=>{

       var newUser = req.body;

       var newuser = new userModel(newUser);

       await newuser.save();

       res.json({
        ok:true,
        result:"New user registered successfully"
       })

});

route.get("/getuser",(req,res)=>{

       res.send("success");


})

module.exports = route;

