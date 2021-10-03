import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ROUTES from "../../config/routes.config";
import { Container } from "@mui/material";
import { StyledButton } from "./header.styles";
import { useAuth } from "../../state/auth/auth.context";
import { logout } from "../../state/auth/auth.actions";
import { styled } from "@mui/system";

const StyledLink = styled(Link)`
  flex-grow: 1;
  font-weight: 500;
  font-size: 1.7rem;
`;

const HeaderApp = () => {
  const { authDispatch } = useAuth();
  const handleLogout = () => {
    authDispatch(logout());
  };
  return (
    <AppBar color="primary" position="static">
      <Container disableGutters maxWidth="lg">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <StyledLink to={ROUTES.app.base}>Trust Market</StyledLink>
          <Link to={ROUTES.app.profile}>
            <StyledButton color="inherit">Profile</StyledButton>
          </Link>
          <Link to={ROUTES.app.createProduct}>
            <StyledButton color="inherit">Create product</StyledButton>
          </Link>

          <StyledButton onClick={handleLogout} color="inherit">
            Log out
          </StyledButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderApp;
