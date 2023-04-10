import React from "react";
import styled from "styled-components";

const Car = ({ decodedVIN }) => {
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
  } = decodedVIN.Results[0];

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarDetailItem = styled.div`
  margin: 5px;
`;
