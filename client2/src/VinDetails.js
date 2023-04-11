import React, { useState, useEffect } from "react";
import styled from "styled-components";

const VinDetails  ({ vin, modelYear }) {
  const [vinData, setVinData] = useState(null);

  useEffect(() => {
    const fetchVinData = async () => {
      try {
        const response = await fetch(`/vin/${vin}/${modelYear}`);
        const data = await response.json();
        setVinData(data.Results[0]);
      } catch (error) {
        console.error("Error fetching VIN data:", error);
      }
    };

    if (vin) {
      fetchVinData();
    }
  }, [vin, modelYear]);

  if (!vinData) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <CarDetailItem>VIN: {vinData.VIN}</CarDetailItem>
      <CarDetailItem>Make: {vinData.Make}</CarDetailItem>
      <CarDetailItem>Model: {vinData.Model}</CarDetailItem>
      <CarDetailItem>Engine Displacement: {vinData.DisplacementL} L</CarDetailItem>
      <CarDetailItem>Engine Cylinders: {vinData.EngineCylinders}</CarDetailItem>
      <CarDetailItem>Engine Horsepower: {vinData.EngineHP}</CarDetailItem>
      <CarDetailItem>Gross Vehicle Weight: {vinData.GVWR} lbs</CarDetailItem>
      <CarDetailItem>Fuel Type: {vinData.FuelTypePrimary}</CarDetailItem>
      <CarDetailItem>Trim: {vinData.Trim}</CarDetailItem>
      <CarDetailItem>Country of Origin: {vinData.PlantCountry}</CarDetailItem>
    </Wrapper>
  );
  

export default VinDetails;

const Wrapper = styled.div``
const CarDetailItem = styled.div``
