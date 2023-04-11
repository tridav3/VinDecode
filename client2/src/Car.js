import React from "react";
import styled from "styled-components";
import { COLORS } from "./Styling";

const Car = ({ decodedVin }) => {
  if (!decodedVin) {
    return <p>No car details found.</p>;
  }

  const {
    VIN,
    Make,
    Model,
    EngineDisplacement,
    EngineCylinders,
    EngineHP,
    GVWR,
    FuelTypePrimary,
    Trim,
    PlantCountry,
  } = decodedVin.Results[0];

  return (
    <CarContainer>
      <CarDetailItem>VIN: {VIN}</CarDetailItem>
      <CarDetailItem>Make: {Make}</CarDetailItem>
      <CarDetailItem>Model: {Model}</CarDetailItem>
      <CarDetailItem>Engine Displacement: {EngineDisplacement}</CarDetailItem>
      <CarDetailItem>Engine Cylinders: {EngineCylinders}</CarDetailItem>
      <CarDetailItem>Engine Horsepower: {EngineHP}</CarDetailItem>
      <CarDetailItem>Gross Vehicle Weight: {GVWR} lbs</CarDetailItem>
      <CarDetailItem>Fuel Type: {FuelTypePrimary}</CarDetailItem>
      <CarDetailItem>Trim: {Trim}</CarDetailItem>
      <CarDetailItem>Country of Origin: {PlantCountry}</CarDetailItem>
    </CarContainer>
  );
};

export default Car;

const CarContainer = styled.div`
  min-height: calc(100vh - 250px);
  background-color: ${COLORS.MutedGreen};
  overflow-y: auto;
`;

const CarDetailItem = styled.div`
  margin: 5px;
`;
