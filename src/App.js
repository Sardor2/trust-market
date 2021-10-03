import { Global } from "@emotion/react";
import { globalStyles } from "./config/styles.config";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, muiTheme } from "./config/theme.config";
import { ThemeProvider as MuiProvider } from "@mui/material/styles";
import Store from "./state/store";
import Views from "./views";
import { StyledEngineProvider } from "@mui/material/styles";
import { QueryClientProvider } from "react-query";
import queryClient from "./config/react-query.config";
import Snackbar from "./components/snackbar";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <MuiProvider theme={muiTheme}>
          <ThemeProvider theme={lightTheme}>
            <Global styles={globalStyles} />
            <Snackbar>
              <Store>
                <Views />
              </Store>
            </Snackbar>
          </ThemeProvider>
        </MuiProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default App;
