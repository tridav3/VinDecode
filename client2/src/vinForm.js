import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, FONTS, Button } from "./Styling";

const VinForm = ({ onSubmit }) => {
  const [vin, setVin] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [decodedVin, setDecodedVin] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/vin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vin, modelYear }),
      });

      if (response.ok) {
        const decoded = await response.json();
        setDecodedVin(decoded);
      } else {
        const errorText = await response.text();
        setDecodedVin({ error: errorText });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
      {decodedVin && (
        <DecodedVin>{JSON.stringify(decodedVin, null, 2)}</DecodedVin>
      )}
    </Form>
  );
};

export default VinForm;

const Form = styled.form``;
const Input1 = styled.input``;
const Input2 = styled.input``;
const DecodedVin = styled.pre``;
