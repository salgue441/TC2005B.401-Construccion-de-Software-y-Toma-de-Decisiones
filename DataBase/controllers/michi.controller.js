const path = require("path")
const michis = require("../models/michis.models")

/**
 * Gets the michi page
 * @param {*} req - Request
 * @param {*} res - Response
 */
exports.getMichi = (req, res) => {
  res.render(path.join(__dirname, "../views/static/michi.ejs"), {
    cards: michis.fetchAll(),
  })
}
