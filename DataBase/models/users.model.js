const database = require("../utils/dataBase");
const bcrypt = require("bcryptjs");

module.exports = class User {
  constructor(user) {
    this.username = user.username || "admin";
    this.password = user.password || "admin";
  }

  save() {
    return bcrypt
      .hash(this.password, 12)
      .then((hashedPassword) => {
        return database.execute(
          `insert into usuario (username, password) values (?, ?)`,
          [this.username, hashedPassword]
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
