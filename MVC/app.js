const express = require("express")
const app = express()

// Using EJS
app.set("view engine", "ejs")
app.set("views", __dirname + "\\views")

// Using static files
app.use(express.static(__dirname + "views"))

// Defining Routes
const mainRoutes = require("./routes/main.routes")
const foodRoutes = require("./routes/comida.routes")

// Using Routes
app.use("/", mainRoutes)
app.use("/food", foodRoutes)

// Server
const PORT = 3000

/**
 * @brief
 * Listens to the port and starts the server
 * @param {number} PORT - Port number
 * @param {function} callback - Callback function
 * @return {void} - Returns nothing
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
