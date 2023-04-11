import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "./Styling";
import Profile from "./Profile";
import Car from "./Car";
import { useAuth0 } from "@auth0/auth0-react";

const MyCars = ({ decodedVin }) => {
  const [vinData, setVinData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    const grabData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/vin");
        const data = await response.json();
        setVinData(data.vinData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    grabData();
  }, [decodedVin]);

  return (
    <Container>
      <Profile />
      {isAuthenticated && (
        <>
          {isLoading ? (
            <Loading>Loading Car Data</Loading>
          ) : (
            <>
              <Header>My Cars</Header>
              <WrapperForCar>
                {(vinData?.length ?? 0) > 0 && (
                  <>
                    {vinData.map((individualVin, index) => {
                      return <Car key={index} decodedVin={individualVin} />;
                    })}
                  </>
                )}
              </WrapperForCar>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default MyCars;

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
  margin: 20px;
`;

const Loading = styled.p`
  display: flex;
  justify-content: center;
  font-family: ${FONTS.default};
  font-size: 20px;
  color: gray;
  margin-top: 20px;
`;
