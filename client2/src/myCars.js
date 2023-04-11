import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "./Styling";
import Profile from "./Profile";

const myCars = () => {
  return (
    <Container>
      <Header>My Cars</Header>
      <Profile />
      <WrapperForCar></WrapperForCar>
    </Container>
  );
};
export default myCars;

const Container = styled.div`
  background-color: ${COLORS.MutedGreen};
`;

const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  color: ${COLORS.OliveDrab};
  font-family: ${FONTS.default};
`;

const WrapperForCar = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  margin: 20px;
`;
