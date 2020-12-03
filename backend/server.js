const port = 5000
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const cors = require("cors")
const app = express()

console.log("che,in:", __dirname)

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//cors
app.use(cors())

// serve stqtic files
// app.use(express.static(path.join(__dirname, "../frontend/public")))

app.get("/", (req, res) => {
  console.log("GET / index.htl ")
  res.send("hello")
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
