import { IconButton } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React, { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Grow from "@mui/material/Grow";

const Snackbar = ({ children }) => {
  const ref = useRef();
  const onClickDismiss = (key) => () => {
    ref.current.closeSnackbar(key);
  };
  return (
    <SnackbarProvider
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)}>
          <CloseIcon sx={{ width: 20, height: 20, color: "#fff" }} />
        </IconButton>
      )}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      maxSnack={3}
      TransitionComponent={Grow}
      ref={ref}
      autoHideDuration={10000}
    >
      {children}
    </SnackbarProvider>
  );
};

export default Snackbar;
