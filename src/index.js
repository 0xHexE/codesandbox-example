const express = require("express");

express.get("/", (res, req, next) => {
  req.jsonp({ test: 11 });
});
