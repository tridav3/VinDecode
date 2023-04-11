import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "./Styling";
import VinForm from "./VinForm";

const Home = () => {
  return (
    <Container>
      <Header>Login to Decode Your Vin!!</Header>
      <VinBlurb>
        <VinHeader>What is a VIN number and what can we do with it?</VinHeader>
        <VinP>
          Decode Vin is a website that lets you decode the 17-digit VIN number
          of any vehicle, revealing all sorts of useful information like the
          car's make, model, engine size, and more. It's like having a backstage
          pass to the world of cars, without having to wear a laminated badge.
          The VIN number can be found in many places, like a secret agent hiding
          in plain sight - on the frame, door placard, windshield, and even on
          your vehicle's registration and insurance documents. It's an essential
          tool for anyone who wants to know their car's history, impress their
          friends with their automotive expertise
        </VinP>
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
