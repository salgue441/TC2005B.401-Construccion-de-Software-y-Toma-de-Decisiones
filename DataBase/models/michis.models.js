const dataBase = require("../utils/dataBase")

module.exports = class Michi {
  constructor(michi) {
    this.cardTitle = michi.cardTitle || "Michi eating pancakes"
    this.cardSubtitle = michi.cardSubtitle || "Cute cata eating pancakes"
    this.cardSrc = michi.cardSrc || ""
    this.cardContent =
      michi.cardContent ||
      "In this image we can see how a cat is looking at the pancakes"
  }

  save() {
    return dataBase.execute(
      `insert into michis (cardTitle, cardSubtitle, cardSrc, cardContent) 
      values (?, ?, ?, ?)`,
      [this.cardTitle, this.cardSubtitle, this.cardSrc, this.cardContent]
    )
  }

  static fetchAll() {
    return dataBase.execute("select * from michis")
  }
}
