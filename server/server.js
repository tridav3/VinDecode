const express = require("express");
const app = express();
const { decodeVIN } = require("./VinDecode");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

//list of databases
const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases();
  const databaseNames = databasesList.databases.map((db) => db.name);
  console.log("Databases:", databaseNames);
  return databaseNames;
};
//connecting to the database
app.get("/", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const databasesList = await listDatabases(client);
    const usersCollection = client.db("VinDecode").collection("users");
    const vinCollection = client.db("VinDecode").collection("Vin");

    const users = await usersCollection.find().toArray();
    const vinData = await vinCollection.find().toArray();

    res.send({ databasesList, users, vinData });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
});
//posting vin data to the database
app.post("/vin", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const usersCollection = client.db("VinDecode").collection("users");
    const vinCollection = client.db("VinDecode").collection("Vin");

    // Retrieve VIN number and model year
    const { vin, modelYear, userId } = req.body;

    // Use the VIN decoding, retrieve VIN data from API
    const decodedVIN = await decodeVIN(vin, modelYear);

    // Insert VIN data into  "Vin" collection
    const result = await vinCollection.insertOne(decodedVIN);

    // Add the VIN ID to the user's document in the "users"
    await usersCollection.updateOne(
      { _id: ObjectId(userId) },
      { $push: { vins: decodedVIN.SearchCriteria } }
    );

    // Return the result of the insertion as a JSON object
    res.json(result);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
});

//
//listening to the port so i can see on insomnia
app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
