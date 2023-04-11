import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS, FONTS } from "./Styling";

const NavBar = () => {
  return (
    <Wrapper>
      <Links to="/">Home</Links>
      <Links to="/contact">Contact</Links>
    </Wrapper>
  );
};
export default NavBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: ${FONTS.default};
  height: 50px;
  background-color: ${COLORS.gray};

  width: 100%;
`;

const Links = styled(Link)`
  font-family: ${FONTS.default};
  color: ${COLORS.OliveDrab};
  font-size: 20px;
  font-weight: bold;
`;
