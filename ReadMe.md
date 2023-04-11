mongo, express, autho0, react, node,
https://vpic.nhtsa.dot.gov/api/

# VIN Decode App

This is a web application that allows users to enter a Vehicle Identification Number (VIN) and decode it to get information about the vehicle. The app uses the NHTSA VIN decoding API to retrieve information about the vehicle.

## Features

- Users can enter a VIN and model year to decode the vehicle information.
  Decoded vehicle information includes make, model, engine displacement, engine cylinders, engine horsepower, gross vehicle weight, fuel type, trim, and country of origin.
- Authenticated users can save VINs to their account and view a list of their saved VINs.
- Admin users can view, add, and delete VINs from the database.

## Technologies Used

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) for the front-end

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) for the back-end

- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) for the database

- <a width="150" height="50" href="https://auth0.com/?utm_source=oss&utm_medium=gp&utm_campaign=oss" target="_blank" alt="Single Sign On & Token Based Authentication - Auth0"><img width="150" height="50" alt="JWT Auth for open source projects" src="//cdn.auth0.com/oss/badges/a0-badge-light.png"/></a> for user authentication

- ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) Components for styling

## Api Used

- https://vpic.nhtsa.dot.gov/api/
  - Decode VIN (flat format)
