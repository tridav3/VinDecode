import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "./Styling";
import VinForm from "./VinForm";

const Home = () => {
  return (
    <Container>
      <Header>Let's Decode Your Vehicle</Header>
      <VinBlurb>
        <VinHeader>What is a VIN number and what can we do with it?</VinHeader>
        <VinP>
          Decode Vin is a web application that enables users to decode the VIN
          numbers of vehicles. The VIN number is a 17-digit identifier that is
          unique to each vehicle, containing information about the make, model,
          engine displacement in liters, engine cylinders, engine horsepower,
          gross vehicle weight, fuel type, trim, and country of origin. The VIN
          number can be found in multiple locations on the vehicle, including on
          the frame, door placard, windshield, and on the registration and
          insurance documents. It is used to track the vehicle's history and is
          an important tool for identifying and verifying the authenticity of a
          vehicle.
        </VinP>
        <VinInstruct>
          To decode a VIN number, enter the VIN number and model year in the
          input field below
        </VinInstruct>
        <VinForm />
      </VinBlurb>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  background-color: ${COLORS.MutedGreen};
`;

const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  color: ${COLORS.OliveDrab};
`;

const VinBlurb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 5px;
  padding: 20px;
  background-color: ${COLORS.White};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;

const VinHeader = styled.h2`
  text-align: center;
  color: ${COLORS.OliveDrab};
  font-family: ${FONTS.default};
  font-size: 20px;
  margin-bottom: 10px;
`;

const VinP = styled.p`
  margin-bottom: 10px;
  line-height: 1.5;
  text-align: justify;
  font-family: ${FONTS.default};
`;

const VinInstruct = styled.p`
  text-align: center;
  font-family: ${FONTS.default};
`;
