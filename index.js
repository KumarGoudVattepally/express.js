var express = require("express");
var app = express();
var fs = require("fs");
app.get("/products", (req, res) => {
  fs.readFile("index.json", "utf-8", (err, data) => {
    if (err) {
      res.send({
        msg: "error",
        status: 400,
      });
    } else {
      res.send({
        msg: "successfully ",
        status: 200,
        data: JSON.parse(data),
      });
    }
  });
});
app.get("/products/:id", (req, res) => {
  fs.readFile("index.json", "utf-8", (err, data) => {
    if (err) {
      res.send({
        msg: "error",
        status: 400,
      });
    } else {
      var data1 = JSON.parse(data);
      var filteresdata = data1.filter((val) => {
        return val.id == req.params.id;
      });
      res.send({
        msg: "successfully ",
        status: 200,
        data: filteresdata,
      });
    }
  });
});
app.listen(3000, () => {
  console.log(" sever is running");
});
