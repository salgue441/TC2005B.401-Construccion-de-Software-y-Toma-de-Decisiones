const express = require("express")
const router = express.Router()

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
router.get("/", (request, response) => {
  response.sendFile("index.html", { root: __dirname + "/../views/" })
})

/**
 * @brief
 * Michi page
 * @param {String} "/michi" Route
 * @param {Function} Callback function - Sends a file
 * @return {Function} Callback function - Sends a file
 * @return {String} File path - __dirname + "/../views/"
 * @return {String} File name - "michi.html"
 * @return {String} File extension - ".html"
 */
router.get("/michi", (request, response) => {
  response.sendFile("michi.html", { root: __dirname + "/../views/" })
})

/**
 * @brief
 * Datos page
 * @param {String} "/Datos" Route
 * @param {Function} Callback function - Sends a file
 * @return {Function} Callback function - Sends a file
 * @return {String} File path - __dirname + "/../views/"
 * @return {String} File name - "datos.html"
 * @return {String} File extension - ".html"
 */
router.get("/datos", (request, response) => {
  response.sendFile("datos.html", { root: __dirname + "/../views/" })
})

/**
 * @brief
 * Datos page
 * @param {String} "/Datos" Route
 * @param {Function} Callback function - Sends a file
 * @return {Function} Callback function - Sends a file
 * @return {String} File path - __dirname + "/../views/"
 * @return {String} File name - "datos.html"
 * @return {String} File extension - ".html"
 */
router.post("/datos", (request, response) => {
  response.sendFile("datos.html", { root: __dirname + "/../views/" })

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
 * Perro page
 * @param {String} "/perro" Route - Route
 * @param {Function} Callback function - Sends a file
 * @return {Function} Callback function - Sends a file
 * @return {String} File path - __dirname + "/views/"
 * @return {String} File name - "perro.html"
 */
router.get("/perro", (request, response) => {
  response.sendFile("perro.html", { root: __dirname + "/../views/" })
})

/**
 * @brief
 * Ajolote page
 * @param {String} "/perro" Route - Route
 * @param {Function} Callback function - Sends a file
 * @return {Function} Callback function - Sends a file
 * @return {String} File path - __dirname + "/views/"
 * @return {String} File name - "perro.html"
 */
router.get("/ajolote", (request, response) => {
  response.sendFile("ajolote.html", { root: __dirname + "/../views/" })
})

module.exports = router
