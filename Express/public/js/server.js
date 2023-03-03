// Express
const express = require("express");
const app = express();
const Router = express.Router();
const bodyParser = require("body-parser");
const routes = require("../../routes/server.routes");

// views directory for static files
app.use(express.static("views"));

// Defining Routes
/**
 * @brief
 * Home page
 * @param {String} "/" Route
 * @param {Function} Callback function
 * @return {Function} Callback function
 * @return {String} File path
 * @return {String} File name
 * @return {String} File extension
 */
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

/**
 * @brief
 * Michi page
 * @param {String} "/michi" Route
 * @param {Function} Callback function
 * @return {Function} Callback function
 * @return {String} File path
 * @return {String} File name
 * @return {String} File extension
 */
app.get("/michi", (request, response) => {
  response.sendFile(__dirname + "/michi.html");
});

/**
 * @brief
 * Datos page
 * @param {String} "/Datos" Route
 * @param {Function} Callback function
 * @return {Function} Callback function
 * @return {String} File path
 * @return {String} File name
 * @return {String} File extension
 */
app.get("/Datos", (request, response) => {
  response.sendFile(__dirname + "/views/Datos.html");
});

app.post("/Datos", (request, response) => {
  response.sendFile(__dirname + "/views/Datos.html");

  let body = [];

  request
    .on("data", (chunk) => {
      body.push(chunk);
    })

    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });
});

/**
 * @brief
 * Get method for on submit button click
 * @param {String} "/Datos" Route
 * @param {Function} Callback function
 * @return {Function} Callback function
 * @return {String} File path
 * @return {String} File name
 */
app.get("/Datos", (request, response) => {
  response.sendFile(__dirname + "/Datos.html");
});

/**
 * @brief
 * Perro page
 * @param {String} "/perro" Route
 * @param {Function} Callback function
 * @return {Function} Callback function
 * @return {String} File path
 * @return {String} File name
 */
app.get("/perro", (request, response) => {
  response.sendFile(__dirname + "/views/perro.html");
});

/**
 * @brief
 * Ajolote page
 * @param {String} "/perro" Route
 * @param {Function} Callback function
 * @return {Function} Callback function
 * @return {String} File path
 * @return {String} File name
 */
app.get("/ajolote", (request, response) => {
  response.sendFile(__dirname + "/views/ajolote.html");
});

/**
 * @brief
 * Module comida
 * @param {String} "/comida" Route
 * @param {Function} Callback function
 * @return {Function} file name
 */

app.get("/comida/michi", (request, response) => {
  response.sendFile(__dirname + "/views/comida/michi.html");
});

/**
 * @brief
 * Module comida
 * @param {String} "/comida" Route
 * @param {Function} Callback function
 * @return {Function} file name
 */

app.get("/comida/perro", (request, response) => {
  response.sendFile(__dirname + "/views/comida/perro.html");
});

/**
 * @brief
 * 404 Error: Page not found
 * @param {Object} request Request object
 * @param {Object} respone Response object
 * @param {Function} next Next function
 * @return {Object} Request object
 * @return {Object} Response object
 * @return {Function} Next function
 */
app.use((request, response, next) => {
  response.status(404).send("<h1>404 Error:</h1> Page not found");
});

// Start server
const PORT = 3000;

/**
 * @brief
 * Start server
 * @param {Number} PORT Port number
 * @param {Function} Callback function
 * @return {Function} Callback function
 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
