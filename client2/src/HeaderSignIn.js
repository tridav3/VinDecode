import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "./Styling";
import Rx7Banner from "./Assets/Rx7Banner.jpg";
import LogOutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const HeaderSignIn = () => {
  const { isLoading, error } = useAuth0();

  const handleLogout = () => {};

  return (
    <HeaderWrap>
      <WebsiteTitle>
        <NameOfSite>David's Vin Decoder</NameOfSite>
      </WebsiteTitle>
      <SignInBox>
        <Auth>Use your socials to</Auth>
        {error && <Auth>Authentication Error</Auth>}
        {!error && isLoading && <Auth>Loading...</Auth>}
        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogOutButton onLogout={handleLogout} />
          </>
        )}
      </SignInBox>
      <SignUpWrapper></SignUpWrapper>
    </HeaderWrap>
  );
};

export default HeaderSignIn;

const HeaderWrap = styled.div`
  width: 100%;
  background-image: url(${Rx7Banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
`;

const WebsiteTitle = styled.div`
  text-align: center;
  padding-top: 45px;
`;

const NameOfSite = styled.h1`
  color: ${COLORS.BurntOrange};
  font-family: ${FONTS.default};
  font-size: 40px;
  text-shadow: -1px -1px 0 #000;
`;

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: fit-content;
  margin-left: auto;
  margin-top: -64px;
`;

const SignInBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Auth = styled.h2`
  color: ${COLORS.Rust};
  font-family: ${FONTS.default};
  font-size: 20px;
  text-shadow: -1px -1px 0 #000;
`;
