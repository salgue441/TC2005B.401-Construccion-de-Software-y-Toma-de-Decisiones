const { Router } = require("express");
const express = require("express");
const router = express.Router();

/**
 * @brief
 * Home page
 * @param {String} "/" Route
 * @param {Function} Callback function - Sends a file
 * @return {Function} Callback function - Sends a file
 * @return {String} File path - __dirname + "/../views/"
 * @return {String} File name - "index.html"
 * @return {String} File extension - ".html"
 */

router.get("/michi", (request, response) => {
  response.sendFile("comidamichi.html", {
    root: __dirname + "/../views/comida",
  });
});

/**
 * @brief
 * Home page
 * @param {String} "/" Route
 * @param {Function} Callback function - Sends a file
 * @return {Function} Callback function - Sends a file
 * @return {String} File path - __dirname + "/../views/"
 * @return {String} File name - "index.html"
 * @return {String} File extension - ".html"
 */
router.get("/perro", (request, response) => {
  response.sendFile("comidaperro.html", {
    root: __dirname + "/../views/comida",
  });
});

module.exports = router;
