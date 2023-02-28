// Express
const express = require("express");
const app = express();
const Router = express.Router();

// Public directory for static files
app.use(express.static("public"));

// Defining Routes
/**
 * @brief
 * Home page
 * @param {String} "/" Route
 * @param {Function} Callback function
 * @return {Function} Callback function
 */
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

/**
 * @brief
 * Michi page
 * @param {String} "/michi" Route
 * @param {Function} Callback function
 * @return {Function} Callback function
 */
app.get("/michi", (request, response) => {
  response.sendFile(__dirname + "/public/michi.html");
});

/**
 * @brief
 * 404 Error: Page not found
 * @param {Object} request Request object
 * @param {Object} respone Response object
 * @param {Function} next Next function
 */
app.use((request, response, next) => {
  response.status(404).send("404 Error: Page not found");
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
