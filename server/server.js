const express = require("express");
const app = express();

const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  const collection = client.db("VinDecode").collection("User");

  collection.find().toArray((err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
