const foods = [
  {
    cardTitle: "Pedigree",
    cardSubtitle: "Small Dog",
    cardSrc:
      "https://yourdogadvisor.com/wp-content/uploads/2020/08/Dog-Food-pic-2-768x1024.webp",
    cardContent: "Complete nutrition for small dogs",
  },
  {
    cardTitle: "Solid Gold",
    cardSubtitle: "Barking at the Moon",
    cardSrc:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1622812343-1-HundNFlocken-Front.jpg",
    cardContent: "Everyday nutrition - lamb, brown rice & vegetables",
  },
  {
    cardTitle: "Hilis",
    cardSubtitle: "Science Diet",
    cardSrc:
      "https://cdn.apartmenttherapy.info/image/upload/v1592396549/k/802816-center-1.webp",
    cardContent: "Adult small breed dog food",
  },
  {
    cardTitle: "Royal Canin",
    cardSubtitle: "Small Dog",
    cardSrc:
      "https://cdn.shopify.com/s/files/1/1387/5411/products/packshot-puppy-maxi-shn17-high-res-print.png?v=1594401687",
    cardContent: "Complete nutrition for small dogs",
  },
  {
    cardTitle: "Pro Plan",
    cardSubtitle: "Complete essential",
    cardSrc:
      "https://specials-images.forbesimg.com/imageserve/61f97945a4068b7537688975/Best-dry-dog-food--Purina-Pro-Plan-Adult-Shredded-Blend-Dry-Dog-Food--35-Pounds-/960x0.jpg?cropX1=0&cropX2=500&cropY1=0&cropY2=464",
    cardContent: "Complete nutrition for small dogs",
  },
  {
    cardTitle: "HARRINGTONS",
    cardSubtitle: "The Natural Choice",
    cardSrc:
      "https://www.alphapaw.com/wp-content/uploads/2021/01/photo_2021-01-20_16-04-18.jpg",
    cardContent: "Turkey & Sweet Potato",
  },
];

module.exports = class ComidaPerro {
  constructor(miComidaPerro) {
    this.cardTitle = miComidaPerro.cardTitle || "Guau";
    this.cardSubtitle = miComidaPerro.cardSubtitle || "Dog";
    this.cardSrc =
      miComidaPerro.cardSrc ||
      "https://t1.ea.ltmcdn.com/es/posts/1/2/2/cual_es_la_mejor_alimentacion_para_perros_24221_600_square.jpg";
    this.cardContent = miComidaPerro.cardContent || "Dog food";
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    foods.push(this);
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return foods;
  }
};
