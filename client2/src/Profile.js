import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { COLORS } from "./Styling";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Article>
        {user?.picture && <Pic src={user.picture} alt={user?.name} />}
        <Header>{user?.name}</Header>
      </Article>
    )
  );
};

export default Profile;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pic = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const Header = styled.h2`
  color: ${COLORS.OliveDrab};
`;
