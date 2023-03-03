const express = require("express");
const Router = express.Router();

Router.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

module.exports = Router;
