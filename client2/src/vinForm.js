import React, { useState } from "react";
import styled from "styled-components";
import { Button, COLORS } from "./Styling";
import { useAuth0 } from "@auth0/auth0-react";
import Car from "./Car";
import MyCars from "./myCars";

const VinForm = ({ onSubmit, email }) => {
  const [vin, setVin] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [decodedVin, setDecodedVin] = useState(null);
  const { user, isAuthenticated } = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isAuthenticated) {
      try {
        const response = await fetch("/vin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vin, modelYear, email }),
        });
        if (response.ok) {
          const text = await response.text();
          const decoded = text ? JSON.parse(text) : null;
          setDecodedVin(decoded.decode);

          // Make a separate fetch request to add the VIN to the user's vins array
          const token = localStorage.getItem("token");
          const response2 = await fetch("/users/vins", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ vin, modelYear, email: user.email }),
          });
          if (response2.ok) {
            console.log("VIN added to user's vins array");
          } else {
            console.log("Failed to add VIN to user's vins array");
          }
        } else {
          const errorText = await response.text();
          setDecodedVin({ error: errorText });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("User is not authenticated");
    }
  };

  return (
    <Wrapper>
      <MyCars />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input1
            type="text"
            placeholder="Enter VIN number"
            value={vin}
            onChange={(event) => setVin(event.target.value)}
          />
          <Input2
            type="text"
            placeholder="Enter Model Year"
            value={modelYear}
            onChange={(event) => setModelYear(event.target.value)}
          />
          <Button type="submit">Decode</Button>
          {decodedVin !== null && decodedVin.error && (
            <div>Error: {decodedVin.error}</div>
          )}
          {decodedVin !== null && !decodedVin.error && (
            <Form>
              <Car decodedVin={decodedVin} />
            </Form>
          )}
        </Form>
      </Container>
    </Wrapper>
  );
};

export default VinForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.MutedGreen};
  overflow-y: auto;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input1 = styled.input`
  margin-bottom: 10px;
`;

const Input2 = styled.input`
  margin-bottom: 10px;
`;

const Wrapper = styled.div``;

// const DecodedVin = styled.div``;
