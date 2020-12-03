const port = 5000
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const routes = express.Router()
app.use("/api", routes)
// const path = require("path")

// console.log("che,in:", __dirname)

// body-parser
routes.use(bodyParser.urlencoded({ extended: false }))
routes.use(bodyParser.json())

//cors
routes.use(cors())

// serve stqtic files
// routes.use(express.static(path.join(__dirname, "../frontend/public")))

routes.get("/", (req, res) => {
  res.send("hello")
})

routes.get("/products", (req, res) => {
  res.send("liste des produits")
})

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}`)
})

/* 
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://remmo:<password>@cluster-eshop.kkpzn.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */
