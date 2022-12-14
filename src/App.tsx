import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { theme } from "./styles/themes/default";
import { RecoilRoot } from "recoil";

export function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}
