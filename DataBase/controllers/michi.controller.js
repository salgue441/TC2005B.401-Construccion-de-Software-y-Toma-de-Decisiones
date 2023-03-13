const michis = require("../models/michis.models")

/**
 * Gets the michi page
 * @param {*} req - Request
 * @param {*} res - Response
 */
exports.getMichi = (req, res) => {
  michis.fetchAll().then(([rows, fieldData]) => {
    res.render("static/michi", {
      cards: rows,
    })
  })
}

/**
 * Posts the michi page
 * @param {*} req - Request
 * @param {*} res - Response
 * @param {*} next - Next
 */
exports.postMichi = (req, res) => {
  const michi = new michis(req.body)
  
  michi
    .save()
    .then(() => {
      res.redirect("/michi")
    })
    .catch((err) => console.log(err))
}
