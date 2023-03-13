const path = require("path");
const comidaPerro = require("../models/comidaPerro.model");

/**
 * Gets the comidaPerro page
 * @param {*} req - Request
 * @param {*} res - Response
 * @param {*} next - Next
 * @return list of foods
 */
exports.getComidaPerro = (req, res) => {
  res.render(path.join(__dirname, "../views/static/food/comidaPerro.ejs"), {
    foods: comidaPerro.fetchAll(),
  });
};
