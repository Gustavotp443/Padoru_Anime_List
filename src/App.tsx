import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./hooks/usePersistedState";

import light from "./themes/light";
import dark from "./themes/dark";

import Footer from "./layout/Footer";
import NavBar from "./layout/Navbar";
import Routering from "./Routes/Routes";
import GlobalStyle from "./styles/globalStyles";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <NavBar toggleTheme={toggleTheme} />
          <Routering theme={theme} />
          <Footer theme={theme} />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
