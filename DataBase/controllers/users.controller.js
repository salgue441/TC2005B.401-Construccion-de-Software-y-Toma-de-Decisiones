const path = require("path");
const User = require("../models/users.model");

exports.getSignup = (req, res) => {
  res.render(path.join(__dirname, "../views/static/signup.ejs"));
};

exports.postSignup = (req, res) => {
  const nuevoUsuario = new User({
    username: req.body.username,
    password: req.body.password,
  });

  nuevoUsuario
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/");
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
