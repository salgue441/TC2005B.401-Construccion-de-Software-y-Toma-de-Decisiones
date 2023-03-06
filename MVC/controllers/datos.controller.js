const path = require("path")

/**
 * Gets the datos page
 * @param {*} req - Request
 * @param {*} res - Response
 */
exports.getDatos = (req, res) => {
  res.render(path.join(__dirname, "../views/static/datos.ejs"))
}

/**
 * Posts the datos page
 * @param {*} req
 * @param {*} res
 */
exports.postDatos = (req, res) => {
  const { username, password } = req.body

  res.render(path.join(__dirname, "../views/static/datos.ejs"), {
    username,
    password,
  })
}
