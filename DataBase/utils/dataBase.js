const mysql = require("mysql2")

const dataBase = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "carlosdiego",
  password: "",
  port: "8000",
})

module.exports = dataBase.promise()
