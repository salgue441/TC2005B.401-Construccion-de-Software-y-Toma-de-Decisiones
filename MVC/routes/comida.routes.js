const express = require("express")
const router = express.Router()
const path = require("path")

/**
 * @brief
 * Home page
 * @param {String} "/" Route
 * @param {Function} Callback function - Sends a file
 * @return {Function} Callback function - Sends a file
 * @return {String} File path - __dirname + "/../views/"
 * @return {String} File name - "index.html"
 * @return {String} File extension - ".html"
 */
router.get("/comidaPerro", (req, res) => {
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
  ]

  res.render(path.join(__dirname, "../views/static/food/comidaPerro"), {
    foods,
  })
})

module.exports = router
