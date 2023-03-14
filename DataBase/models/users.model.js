const database = require("../utils/dataBase");

module.exports = class User {
  constructor(user) {
    this.username = user.username || "admin";
    this.password = user.password || "admin";
  }

  save() {
    return database.execute(
      `insert into usuario (username, password) values (?, ?)`,
      [this.username, this.password]
    );
  }
};
