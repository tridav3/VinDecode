const express = require("express");
const app = express();
const { decodeVIN } = require("./VinDecode");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const jwt = require("jsonwebtoken");

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
//get vin from vin collection
app.get("/vin/:vin/:modelYear", async (req, res) => {
  const { vin, modelYear } = req.params;

  try {
    const vinData = await decodeVIN(vin, modelYear);
    res.json(vinData);
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

    // Retrieve the VIN number and model year from the request body
    const { vin, modelYear, email } = req.body;

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

    // Update the user's document with the new VIN
    // Update the user's document with the new VIN
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
    // Return an empty response with a 200 status code
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
  try {
    const { vin, email } = req.body;
    console.log(req.body);
    // const token =
    //   req.headers.Authorization && req.headers.Authorization.split(" ")[1];

    // if (!token) {
    //   return res.status(401).json({ message: "Unauthorized" });
    // }

    // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // const email = decodedToken.email;

    await client.connect();
    console.log("Connected to MongoDB");

    const usersCollection = client.db("VinDecode").collection("users");

    // Retrieve the user
    const user = await usersCollection.findOne({ email });

    // Update the user
    const result = await usersCollection.updateOne(
      { email: user.email },
      { $addToSet: { vins: req.body.vin } }
    );

    // Return success
    res.json({ message: "Saved VIN to your email!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
});

// // decode
// app.post("/decode", async (req, res) => {
//   try {
//     const { vin, modelYear } = req.body;
//     const decodedVIN = await decodeVIN(vin, modelYear);
//     res.status(200).json(decodedVIN);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

//listening to the port so i can see on insomnia
app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
