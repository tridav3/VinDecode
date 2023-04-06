import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Styling";

const LogOutButton = ({ onLogout }) => {
  const { isAuthenticated, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    onLogout();
  };

  return isAuthenticated && <Button onClick={handleLogout}>Log Out</Button>;
};

export default LogOutButton;
