const fetch = require("node-fetch");

const VIN_API_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";

const decodeVIN = async (vin, modelYear) => {
  const url = `${VIN_API_URL}/DecodeVinValues/${vin}?format=json&modelyear=${modelYear}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

module.exports = { decodeVIN };
