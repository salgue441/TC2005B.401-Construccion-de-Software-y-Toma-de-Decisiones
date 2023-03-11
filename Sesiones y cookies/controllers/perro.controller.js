const path = require("path")

/**
 * Gets the perro page
 * @param {*} req - Request
 * @param {*} res - Response
 */
exports.getPerro = (req, res) => {
  res.render(path.join(__dirname, "../views/static/perro.ejs"), {
    link: "https://i.pinimg.com/736x/d8/a8/12/d8a8120fbb49f734ab1eec235ddecd74.jpg",
  })
}
