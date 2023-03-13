const database = require("../utils/dataBase")


module.exports = class ComidaPerro {
  constructor(miComidaPerro) {
    this.cardTitle = miComidaPerro.cardTitle || "Guau"
    this.cardSubtitle = miComidaPerro.cardSubtitle || "Dog"
    this.cardSrc =
      miComidaPerro.cardSrc ||
      "https://t1.ea.ltmcdn.com/es/posts/1/2/2/cual_es_la_mejor_alimentacion_para_perros_24221_600_square.jpg"
    this.cardContent = miComidaPerro.cardContent || "Dog food"
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return database.execute(
      `insert into comidaperro (cardTitle, cardSubtitle, cardSrc, cardContent) values (?, ?, ?, ?)`,
      [this.cardTitle, this.cardSubtitle, this.cardSrc, this.cardContent]
    )
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return database.execute(`select * from comidaperro`)
  }
}
