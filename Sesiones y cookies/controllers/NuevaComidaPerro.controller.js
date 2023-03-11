const path = require("path");

const comidaPerro = require("../models/comidaPerro.model");

exports.getNuevaComidaPerro = (req, res) => {
  res.render(path.join(__dirname, "../views/static/food/NuevaComidaPerro.ejs"));
};

exports.postNuevaComidaPerro = (req, res) => {
  const newFood = new comidaPerro({
    cardTitle: req.body.cardTitle,
    cardSubtitle: req.body.cardSubtitle,
    cardSrc: req.body.cardSrc,
    cardContent: req.body.cardContent,
  });
  newFood.save();
  res.redirect("/food/comidaPerro");
};
