import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderSignIn from "./HeaderSignIn";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import NavBar from "./NavBar";

import Contact from "./contact";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <HeaderSignIn />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
`;
///help stuck in github
