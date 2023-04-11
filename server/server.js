const express = require("express");
const app = express();
const { decodeVIN } = require("./VinDecode");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

//get vin from vin collection
app.get("/vin", async (req, res) => {
  try {
    await client.connect();

    const vinData = await client
      .db("VinDecode")
      .collection("Vin")
      .find({})
      .toArray();
    res.json({ vinData });
  } catch (error) {
    console.error("Error fetching VIN data:", error);
    res.status(500).json({ error: "Error fetching VIN data" });
  }
});

//posting vin data to the database
app.post("/vin", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const vinCollection = client.db("VinDecode").collection("Vin");
    const usersCollection = client.db("VinDecode").collection("users");

    const { vin, modelYear, email } = req.body;

    const existingVin = await vinCollection.findOne({
      SearchCriteria: `VIN(s): ${vin}`,
      "Results.0": { $exists: true },
    });

    if (existingVin) {
      return res.status(400).send("VIN already exists in the database");
    }

    const decodedVIN = await decodeVIN(vin, modelYear);

    await vinCollection.insertOne(decodedVIN);

    const result = await usersCollection.updateOne(
      { email },
      {
        $push: { vins: decodedVIN },
        $set: {
          make: decodedVIN.Results[0].Make,
          model: decodedVIN.Results[0].Model,
        },
      }
    );

    const token = jwt.sign({ vin }, "secretKey");

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 1000 * 12,
        sameSite: true,
      })
      .status(200)
      .json({ decode: decodedVIN });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
});

app.post("/users/vins", async (req, res) => {
  const { vin, email } = req.body;

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const usersCollection = client.db("VinDecode").collection("users");

    const result = await usersCollection.updateOne(
      { email },
      { $addToSet: { vins: vin } }
    );

    res.json({ message: "Saved VIN to your email!" });
  } catch (error) {
    console.error("Error saving VIN to user:", error);
    res.status(500).json({ error: "Error saving VIN to user" });
  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
});

//delete vin from vin collection
app.delete("/vin/:_id", async (req, res) => {
  try {
    await client.connect();

    const vinCollection = client.db("VinDecode").collection("Vin");
    const { _id } = req.params;

    const result = await vinCollection.deleteOne({ _id: new ObjectId(_id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "VIN not found" });
    }

    res.json({ message: "VIN deleted" });
  } catch (error) {
    console.error("Error deleting VIN:", error);
    res.status(500).json({ error: "Error deleting VIN" });
  } finally {
    await client.close();
  }
});

//listening to the port so i can see on insomnia
app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
