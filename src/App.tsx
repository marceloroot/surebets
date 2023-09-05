import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Router } from "./routes";
import { AuthContextProvider } from "./contexts/Auth";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Layout } from "react-feather";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <AuthContextProvider>
         
          <Router />
      
        </AuthContextProvider>
      </BrowserRouter>

      <GlobalStyle />

    </ThemeProvider>
  );
}
