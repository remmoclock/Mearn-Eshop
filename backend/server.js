const port = 5000
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//cors
app.use(cors())

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}`)
})

app.get("/", (req, res) => {
  res.send("Hello World!")
})
