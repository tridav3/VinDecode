import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "./Styling";
import Profile from "./Profile";

const myCars = () => {
  return (
    <Container>
      <Header>My Cars</Header>
      <Profile />
      <WrapperForCar>
        <Car>
          <CarDetailItem>
            VIN:
            {/*
             */}
            JM1FD3313P0209974
          </CarDetailItem>
          <CarDetailItem>
            Make:
            {/*  */}
            Mazda
          </CarDetailItem>
          <CarDetailItem>
            Model:
            {/*  */}
            RX-7
          </CarDetailItem>
          <CarDetailItem>
            Engine Displacement:
            {/*  */}
            1.3L
          </CarDetailItem>
          <CarDetailItem>
            Engine Cylinders:
            {/*  */}2
          </CarDetailItem>
          <CarDetailItem>
            Engine Horsepower:
            {/*  */}
            276
          </CarDetailItem>
          <CarDetailItem>
            Gross Vehicle Weight:
            {/*  */}
            2,866 lbs
          </CarDetailItem>
          <CarDetailItem>
            Fuel Type:
            {/*  */}
            Gasoline
          </CarDetailItem>
          <CarDetailItem>
            Trim:
            {/*  */}
            RS
          </CarDetailItem>
          <CarDetailItem>
            Country of Origin:
            {/*  */}
            Japan
          </CarDetailItem>
        </Car>
        <Car>
          <CarDetailItem>
            VIN:
            {/*
             */}
            JM1FD3313P0209974
          </CarDetailItem>
          <CarDetailItem>
            Make:
            {/*  */}
            Mazda
          </CarDetailItem>
          <CarDetailItem>
            Model:
            {/*  */}
            RX-7
          </CarDetailItem>
          <CarDetailItem>
            Engine Displacement:
            {/*  */}
            1.3L
          </CarDetailItem>
          <CarDetailItem>
            Engine Cylinders:
            {/*  */}2
          </CarDetailItem>
          <CarDetailItem>
            Engine Horsepower:
            {/*  */}
            276
          </CarDetailItem>
          <CarDetailItem>
            Gross Vehicle Weight:
            {/*  */}
            2,866 lbs
          </CarDetailItem>
          <CarDetailItem>
            Fuel Type:
            {/*  */}
            Gasoline
          </CarDetailItem>
          <CarDetailItem>
            Trim:
            {/*  */}
            RS
          </CarDetailItem>
          <CarDetailItem>
            Country of Origin:
            {/*  */}
            Japan
          </CarDetailItem>
        </Car>
      </WrapperForCar>
    </Container>
  );
};
export default myCars;

const Container = styled.div`
  min-height: calc(100vh - 250px);
  background-color: ${COLORS.MutedGreen};
  overflow-y: auto;
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

const Car = styled.div`
  width: 30%;
  border-radius: 5px;
  padding: 20px;
  background-color: ${COLORS.White};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;

const CarDetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// // import React from "react";
// import styled from "styled-components";

// const CarDetails = ({ vin, make, model, displacement, cylinders, horsepower, weight, fuel, trim, country }) => {
//   return (
//     <Car>
//       <CarDetailItem>
//         VIN: {vin}
//       </CarDetailItem>
//       <CarDetailItem>
//         Make: {make}
//       </CarDetailItem>
//       <CarDetailItem>
//         Model: {model}
//       </CarDetailItem>
//       <CarDetailItem>
//         Engine Displacement: {displacement}
//       </CarDetailItem>
//       <CarDetailItem>
//         Engine Cylinders: {cylinders}
//       </CarDetailItem>
//       <CarDetailItem>
//         Engine Horsepower: {horsepower}
//       </CarDetailItem>
//       <CarDetailItem>
//         Gross Vehicle Weight: {weight}
//       </CarDetailItem>
//       <CarDetailItem>
//         Fuel Type: {fuel}
//       </CarDetailItem>
//       <CarDetailItem>
//         Trim: {trim}
//       </CarDetailItem>
//       <CarDetailItem>
//         Country of Origin: {country}
//       </CarDetailItem>
//     </Car>
//   );
// };

// const WrapperForCar = styled.div``;
// const Car = styled.div``;
// const CarDetailItem = styled.div``;

// export default CarDetails;
