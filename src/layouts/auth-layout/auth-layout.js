import { Container } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import AuthViews from "../../views/auth/auth-views";
import Header from "../header/header-auth";
import { Box } from "@mui/system";
const AuthWrapper = styled(Box)`
  width: 100%;
  height: 100%;
`;

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <Header />
      <Container maxWidth="md">
        <AuthViews />
      </Container>
    </AuthWrapper>
  );
};

export default AuthLayout;
