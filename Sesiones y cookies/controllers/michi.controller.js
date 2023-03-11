const path = require("path")

/**
 * Gets the michi page
 * @param {*} req - Request
 * @param {*} res - Response
 */
exports.getMichi = (req, res) => {
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
  ]

  res.render(path.join(__dirname, "../views/static/michi.ejs"), { cards })
}
