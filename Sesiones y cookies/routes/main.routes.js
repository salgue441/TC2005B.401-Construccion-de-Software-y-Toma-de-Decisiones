const express = require("express")
const router = express.Router()
const path = require("path")
const bodyParser = require("body-parser")

//Body parser config
router.use(bodyParser.urlencoded({ extended: true }))

// Defining Routes
/**
 * @brief
 * Home Page Route
 * @param {string} "/" - Home Page Route
 * @param {function} callback - Callback function
 * @return {void} - Returns nothing
 */
const homeController = require("../controllers/home.controller")
router.get("/", homeController.getHome)

/**
 * @brief
 * Michi Page Route. Contains a list of cards with images and descriptions.
 * @param {string} "/michi" - Michi Page Route
 * @param {function} callback - Callback function
 * @return {void} - Returns nothing
 */
const michiController = require("../controllers/michi.controller")
router.get("/michi", michiController.getMichi)

/**
 * @brief
 * Perro page
 * @param {String} "/Perro" Route
 * @param {Function} Callback function - Sends a file
 * @return {void} - Returns nothing
 */
const perroController = require("../controllers/perro.controller")
router.get("/perro", perroController.getPerro)

/**
 * @brief
 * Ajolote page
 * @param {String} "/Ajolote" Route
 * @param {Function} Callback function - Sends a file
 * @return {void} - Returns nothing
 */
const ajoloteController = require("../controllers/ajolote.controller")
router.get("/ajolote", ajoloteController.getAjolote)

/**
 * @brief
 * Datos page
 * @param {String} "/Datos" Route
 * @param {Function} Callback function - Sends a file
 * @return {void} - Returns nothing
 */
const datosController = require("../controllers/datos.controller")
router.get("/datos", datosController.getDatos)

/**
 * @brief
 * Posts datos page
 * @param {String} "/Datos" Route
 * @param {Function} Callback function - Sends a file
 * @return {void} - Returns nothing
 */
router.post("/", datosController.postDatos)

// Exporting Routes
module.exports = router
