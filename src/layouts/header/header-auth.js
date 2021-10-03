import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ROUTES from "../../config/routes.config";
import Container from "@mui/material/Container";
import { StyledButton } from "./header.styles";

const Header = () => {
  return (
    <AppBar color="primary" position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trust Market
          </Typography>
          <Link to={ROUTES.auth.login}>
            <StyledButton color="inherit">Login</StyledButton>
          </Link>
          <Link to={ROUTES.auth.signup}>
            <StyledButton color="inherit">Sign up</StyledButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
