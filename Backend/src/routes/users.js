var express = require("express");

var userModel = require("../model/usermodel.js");

var jwt = require("jsonwebtoken");

var secretkey = "qwerty";

var key = "rohan";

var loginuserMiddleware = require("../middleware/loginuserMiddleware.js");
const bookMiddleware = require("../middleware/bookMiddleware.js");

var route = express.Router();

route.post("/newuser", async (req, res) => {
  try {
    var newUser = req.body;

    var newuser = new userModel(newUser);

    await newuser.save();

    res.json({
      ok: true,
      result: "New user registered successfully",
    });
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
});

route.post("/loginuser", loginuserMiddleware, async (req, res) => {
  var user = req.body;

  var token = jwt.sign(user, secretkey);

  res.json({
    ok: true,
    result: "User Successfully Logged In",
    token: token,
  });
});

route.get("/authenticate", bookMiddleware, (req, res) => {
  res.send("success");
});

module.exports = { route, key };
