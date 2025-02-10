var express = require("express");
var route = express.Router();
var bookModel = require("../model/bookmodel.js");
var bookMiddleware = require("../middleware/bookMiddleware.js");

route.post("/newbook", bookMiddleware, async (req, res) => {
  try {
    var newbook = req.body;

    var newBook = new bookModel(newbook);

    await newBook.save();

    res.json({
      ok: true,
      result: "New book inserted successfully",
    });
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
});

route.get("/getbook", bookMiddleware, async (req, res) => {
  try {
    var allbookdata = await bookModel.find();

    res.json({
      ok: true,
      result: allbookdata,
    });
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
});

route.put("/updatebook", bookMiddleware, async (req, res) => {
  try {
    await bookModel.findByIdAndUpdate({ _id: req.body.id }, req.body);

    res.json({
      ok: true,
      result: "successfully Updated book data",
    });
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
});

route.get("/getbookdetail/:id", bookMiddleware, async (req, res) => {
  var id = req.params.id;

  var detaildata = await bookModel.find({ _id: id });

  res.json({
    ok: true,
    result: detaildata,
  });
});

route.delete("/deletebook/:id", bookMiddleware, async (req, res) => {
  try {
    var id = req.params.id;

    await bookModel.findByIdAndDelete({ _id: id });

    res.json({
      ok: true,
      result: "Book Removed Successfully",
    });
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
});

module.exports = route;
