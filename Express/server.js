const express = require("express")
const app = express()

// Defining routes
const mainRoutes = require("./routes/main.routes.js")

// Using the routes
app.use("/", mainRoutes)
app.use("/michi", mainRoutes)
app.use("/datos", mainRoutes)
app.use("/perros", mainRoutes)
app.use("/ajolote", mainRoutes)

// Listening to port 3000
const server = app.listen(3000, () => {
  console.log("Listening on port %s...", server.address().port)
})
