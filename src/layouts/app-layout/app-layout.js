import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AppViews from "../../views/app/app-views";
import HeaderApp from "../header/header-app";

const AppLayout = () => {
  return (
    <div>
      <HeaderApp />
      <Container maxWidth="lg">
        <Box sx={{ marginTop: "50px" }}>
          <AppViews />
        </Box>
      </Container>
    </div>
  );
};

export default AppLayout;
