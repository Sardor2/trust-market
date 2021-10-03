import { Backdrop, CircularProgress, Modal, Paper } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";

const StyledModal = styled(Modal)`
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalSpinner = () => {
  return (
    <StyledModal open={true}>
      <CircularProgress size={59} />
    </StyledModal>
  );
};

export default GlobalSpinner;
