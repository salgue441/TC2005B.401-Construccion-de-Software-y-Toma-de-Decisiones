const http = require("http")

const server = http.createServer((request, response) => {
  console.log(request.url)
  response.setHeader("Content-Type", "text/html")
  response.write("<h1>Hot Cakes</h1>")
  response.write("<p>Hot cakes are the best</p>")
  response.end()
})

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})
