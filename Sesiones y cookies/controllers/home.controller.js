const path = require("path")

/**
 * Gets the home page
 * @param {*} req - Request
 * @param {*} res - Response
 */
exports.getHome = (req, res) => {
  res.render(path.join(__dirname, "../views/static/index.ejs"))
}
