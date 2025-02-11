var express = require("express");
var app = express();
require("./config/mongooseconnect.js");
var { route } = require("./routes/users.js");
const cors = require("cors");
var bookRoute = require("./routes/books.js");

app.use(cors());

app.use(express.json());

app.use("/user", route);

app.use("/book", bookRoute);

app.listen("8888", () => {
  console.log("server started successfully");
}); //http://localhost:8888
