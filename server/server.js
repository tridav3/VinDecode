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
//
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
//

//posting vin data to the database
app.post("/vin", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const vinCollection = client.db("VinDecode").collection("Vin");

    // Retrieve the VIN number and model year from the request body
    const { vin, modelYear } = req.body;

    // Check if the VIN already exists in the database
    const existingVin = await vinCollection.findOne({
      SearchCriteria: `VIN(s): ${vin}`,
      "Results.0": { $exists: true },
    });

    if (existingVin) {
      // If the VIN already exists, return a 400 status code and a message
      return res.status(400).send("VIN already exists in the database");
    }

    // Use the VIN decoding module to retrieve VIN data from the NHTSA API
    const decodedVIN = await decodeVIN(vin, modelYear);

    // Insert the VIN data into the "Vin" collection
    await vinCollection.insertOne(decodedVIN);

    // Return an empty response with a 200 status code
    res.status(200).send();
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
});

app.post("/users/:email/vins", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const usersCollection = client.db("VinDecode").collection("users");

    // Retrieve the user's document by email
    const user = await usersCollection.findOne({ email: req.params.email });

    // Update the user's document with the new VIN
    const result = await usersCollection.updateOne(
      { _id: user._id },
      { $push: { vins: req.body.vin } }
    );

    // Return a success message to the client
    res.json({ message: "Saved VIN to your email!" });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
});

//listening to the port so i can see on insomnia
app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
