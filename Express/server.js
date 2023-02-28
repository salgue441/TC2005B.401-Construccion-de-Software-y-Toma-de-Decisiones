// Express
const express = require("express")
const app = express()
const Router = express.Router()

// Public directory for static files
app.use(express.static("public"))

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
  response.sendFile(__dirname + "/public/index.html")
})

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
  response.sendFile(__dirname + "/public/michi.html")
})

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
  response.sendFile(__dirname + "/public/Datos.html")
})

app.post("/Datos", (request, response) => {
  response.sendFile(__dirname + "/public/Datos.html")

  let body = []

  request
    .on("data", (chunk) => {
      body.push(chunk)
    })

    .on("end", () => {
      body = Buffer.concat(body).toString()
      console.log(body)
    })
})

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
  response.sendFile(__dirname + "/public/Datos.html")
})

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
  response.sendFile(__dirname + "/public/perro.html")
})

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
  response.sendFile(__dirname + "/public/ajolote.html")
})

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
  response.status(404).send("<h1>404 Error:</h1> Page not found")
})

// Start server
const PORT = 3000

/**
 * @brief
 * Start server
 * @param {Number} PORT Port number
 * @param {Function} Callback function
 * @return {Function} Callback function
 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
