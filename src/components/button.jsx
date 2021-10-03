import { CircularProgress } from "@mui/material";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/system";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const StyledButton = styled(MuiButton)`
  font-size: 16px;
  text-transform: capitalize;
  padding: 10px 20px;
`;

const CustomButton = ({ children, isLoading, isSuccess, ...props }) => {
  return (
    <StyledButton disabled={isLoading} {...props}>
      {children}
      {isLoading && (
        <CircularProgress sx={{ marginLeft: 1 }} size={18} color="inherit" />
      )}
      {isSuccess && <DoneIcon sx={{ marginLeft: 1 }} />}
    </StyledButton>
  );
};

export default CustomButton;
