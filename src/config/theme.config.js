import { createTheme } from "@mui/material/styles";

export const theme = {
  text: {
    main: "#fff",
    light: "#C8C6C6",
  },
  bg: {
    main: "#171010",
    light: "#2B2B2B",
    lighter: "#423F3E",
  },
  pallete: {
    primary: {
      main: "#246BFD",
      dark: "#2060e4",
      light: "3a7afd",
    },
  },
};
export const lightTheme = {
  text: {
    main: "#000",
    light: "#C8C6C6",
  },
  bg: {
    main: "#fff",
    light: "#F9F9F9",
    lighter: "#FEFBF3",
  },
  pallete: {
    primary: {
      main: "#246BFD",
      dark: "#2060e4",
      light: "3a7afd",
    },
  },
};

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#246BFD",
      dark: "#2060e4",
      light: "3a7afd",
    },
  },
  shape: {
    borderRadius: 8,
  },
});
