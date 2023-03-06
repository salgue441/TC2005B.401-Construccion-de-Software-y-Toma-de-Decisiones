const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");

//Body parser config
router.use(bodyParser.urlencoded({ extended: true }));

// Defining Routes
/**
 * @brief
 * Home Page Route
 * @param {string} "/" - Home Page Route
 * @param {function} callback - Callback function
 * @return {void} - Returns nothing
 */
router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../views/static/index.ejs"));
});

/**
 * @brief
 * Michi Page Route. Contains a list of cards with images and descriptions.
 * @param {string} "/michi" - Michi Page Route
 * @param {function} callback - Callback function
 * @return {void} - Returns nothing
 */
router.get("/michi", (req, res) => {
  const cards = [
    {
      cardTitle: "Michi eating pancakes",
      cardSubtitle: "Black cat eating pancakes",
      cardSrc:
        "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_39/1162329/cat-eating-baby-pancakes-today-160929-tease.jpg",
      cardContent:
        "In this image we can see how a cat is looking at the pancakes",
    },
    {
      cardTitle: "Michi looking at pancakes",
      cardSubtitle: "Cat looking at pancakes",
      cardSrc:
        "https://faqcats.com/wp-content/uploads/Can-Cats-Eat-Pancakes.jpg",
      cardContent: "The second image describes a cat looking at pancakes.",
    },
    {
      cardTitle: "Orange cat eating pancakes",
      cardSubtitle: "Cat eating a pancake",
      cardSrc:
        "https://preview.redd.it/fcy75bgri5u41.jpg?width=640&crop=smart&auto=webp&s=1280ea808f275181b40d5b456f638b85c326fa43",
      cardContent: "The third image describes a cat eating pancakes.",
    },
    {
      cardTitle: "Cat reparing a computer",
      cardSubtitle: "Cat inside a computer",
      cardSrc:
        "https://i.pinimg.com/600x315/7b/a0/61/7ba06153e4360afcee03b853743e868f.jpg",
      cardContent: "The fourth image describes a cat inside a computer.",
    },
    {
      cardTitle: "Cat debugging code",
      cardSubtitle: "Cat with a MacBook Pro laptop",
      cardSrc:
        "https://i.pinimg.com/736x/76/3c/c5/763cc58e033253a31a32f050b471d335.jpg",
      cardContent: "The fifth image describes a cat debugging code.",
    },
    {
      cardTitle: "Data Scientist Jr. Cat",
      cardSubtitle: "Cat meme that describes data scientist's pain",
      cardSrc:
        "https://images3.memedroid.com/images/UPLOADED478/6163397ee2cb3.jpeg",
      cardContent: "The sixth image describes a meme.",
    },
    {
      cardTitle: "Cat with a laptop",
      cardSubtitle: "Cat with a laptop making code",
      cardSrc:
        "http://www.quickmeme.com/img/99/9903c7c14add3fd0758b7b5b80c24d48101f296f13ce34736799a82c71f61bc2.jpg",
      cardContent: "The seventh image describes a cat with a laptop.",
    },
    {
      cardTitle: "Cat fixing code",
      cardSubtitle: "Cat fixing code in Windows 98",
      cardSrc:
        "https://www.kidscodecs.com/wp-content/uploads/2020/02/History_TS_ProgrammingMemes_image3.png",
      cardContent: "The eighth image describes a cat fixing code.",
    },
    {
      cardTitle: "Cat crying",
      cardSubtitle: "Cat crying because of Linux",
      cardSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyy0XsGiyfmQg33g80pJ5hhpVirf1cXn7OPg&usqp=CAU",
      cardContent: "The ninth image describes a cat crying.",
    },
  ];

  res.render(path.join(__dirname, "../views/static/michi.ejs"), { cards });
});

/**
 * @brief
 * Perro page
 * @param {String} "/Perro" Route
 * @param {Function} Callback function - Sends a file
 * @return {void} - Returns nothing
 */
router.get("/perro", (req, res) => {
  res.render(path.join(__dirname, "../views/static/perro.ejs"), {
    link: "https://i.pinimg.com/736x/d8/a8/12/d8a8120fbb49f734ab1eec235ddecd74.jpg",
  });
});

/**
 * @brief
 * Ajolote page
 * @param {String} "/Ajolote" Route
 * @param {Function} Callback function - Sends a file
 * @return {void} - Returns nothing
 */
router.get("/ajolote", (req, res) => {
  const images = [
    "https://storage.googleapis.com/gx-global-cms/mkt/9c3d3110-1f83-4252-850f-65fb614bf666.jpg",
    "https://www.azpetvet.com/wp-content/uploads/AdobeStock_473131207-1-scaled.jpeg",
    "https://cdn.shopify.com/s/files/1/1365/2497/products/office-Axolotl.jpg?v=1665806394",
    "https://i.etsystatic.com/26875140/r/il/ea2420/3536725928/il_570xN.3536725928_qhwq.jpg",
  ];
  res.render(path.join(__dirname, "../views/static/ajolote.ejs"), { images });
});

/**
 * @brief
 * Datos page
 * @param {String} "/Datos" Route
 * @param {Function} Callback function - Sends a file
 * @return {void} - Returns nothing
 */
router.get("/datos", (req, res) => {
  res.render(path.join(__dirname, "../views/static/datos.ejs"));
});

/**
 * @brief
 * Posts datos page
 * @param {String} "/Datos" Route
 * @param {Function} Callback function - Sends a file
 * @return {void} - Returns nothing
 */
router.post("/", (req, res) => {
  const { username, password } = req.body;

  res.render(path.join(__dirname, "../views/static/datos.ejs"), {
    username,
    password,
  });
});

// Exporting Routes
module.exports = router;
