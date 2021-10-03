import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Spinner = ({ isLoading, children }) => {
  return isLoading ? (
    <Box
      sx={{
        height: "20em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={40} />
    </Box>
  ) : (
    children
  );
};

export default Spinner;
