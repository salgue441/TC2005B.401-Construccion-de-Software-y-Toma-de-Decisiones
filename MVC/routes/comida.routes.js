const express = require("express")
const router = express.Router()
const path = require("path")

/**
 * @brief
 * Home page
 * @param {String} "/" Route
 * @param {Function} Callback function - Sends a file
 * @return {Function} Callback function - Sends a file
 * @return {void} - Returns nothing
 */
const comidaPerro = require("../controllers/comidaPerro.controller")
router.get("/comidaPerro", comidaPerro.getComidaPerro)

module.exports = router
