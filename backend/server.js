const port = 5000
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const routes = express.Router()
app.use("/api", routes)

const database = "eshop"

// const path = require("path")

// console.log("che,in:", __dirname)

// body-parser
routes.use(bodyParser.urlencoded({ extended: false }))
routes.use(bodyParser.json())
const jsonParser = bodyParser.json()

//cors
routes.use(cors())

// serve stqtic files
// routes.use(express.static(path.join(__dirname, "../frontend/public")))

// routes
routes.get("/", (req, res) => {
  res.send("hello")
})

// mongoDB client
const MongoClient = require("mongodb").MongoClient
const uri =
  "mongodb+srv://eshop:eshop@cluster-eshop.kkpzn.mongodb.net/eshop?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// DB connect
client.connect((err) => {
  if (err) {
    throw Error(err)
  }

  !err && console.log("connected to db ok")

  const products = client.db(database).collection("products")
  // perform actions on the collection object
  routes.get("/products", (req, res) => {
    products
      .find()
      .toArray()
      .then((error, results) => {
        if (error) {
          return res.send(error)
        }
        res.status(200).send({ results })
      })
      .catch((err) => res.send(err))
  })

  routes.post("/products/add", jsonParser, (req, res) => {
    products
      .insertOne(req.body)
      .then(() => {
        return res.status(200).send("succes insert new doc")
      })
      .catch((err) => {
        console.log(err)
        res.send(err)
      })
  })
})

// server connect
app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}`)
})
