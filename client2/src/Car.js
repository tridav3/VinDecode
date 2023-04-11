import React from "react";
import styled from "styled-components";
import { COLORS, Button } from "./Styling";

const Car = ({ decodedVin }) => {
  if (!decodedVin) {
    return <p>No car details found.</p>;
  }
  const _id = decodedVin._id;
  console.log(_id);

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

  const handleDelete = async () => {
    try {
      const response = await fetch(`/vin/${_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log(`VIN ${VIN} deleted`);
        window.location.reload();
      } else {
        console.log(`Error deleting VIN ${VIN}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
      <Button onClick={handleDelete}>Delete</Button>
    </CarContainer>
  );
};

export default Car;

const CarContainer = styled.div`
  background-color: ${COLORS.MutedGreen};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const CarDetailItem = styled.div`
  margin: 5px;
`;
