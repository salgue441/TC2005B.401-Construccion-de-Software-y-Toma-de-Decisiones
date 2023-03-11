const path = require("path")

/**
 * Gets the michi page
 * @param {*} req - Request
 * @param {*} res - Response
 */
exports.getAjolote = (req, res) => {
  const images = [
    "https://storage.googleapis.com/gx-global-cms/mkt/9c3d3110-1f83-4252-850f-65fb614bf666.jpg",
    "https://www.azpetvet.com/wp-content/uploads/AdobeStock_473131207-1-scaled.jpeg",
    "https://cdn.shopify.com/s/files/1/1365/2497/products/office-Axolotl.jpg?v=1665806394",
    "https://i.etsystatic.com/26875140/r/il/ea2420/3536725928/il_570xN.3536725928_qhwq.jpg",
  ]

  res.render(path.join(__dirname, "../views/static/ajolote.ejs"), { images })
}
