const { response } = require("express");
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
  const cookies = req.get("Cookie") || "";

  let consultas = cookies.split("=")[1] || 0;

  consultas++;

  res.setHeader("Set-Cookie", "consultas=" + consultas + "; HttpOnly");

  console.log(req.get("Cookie"));

  res.render(path.join(__dirname, "../views/static/food/comidaPerro.ejs"), {
    foods: comidaPerro.fetchAll(),
    ultima_comida: req.session.ultimacomida || "Ninguna",
  });
};
