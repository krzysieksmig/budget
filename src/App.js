import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";

import theme from "utils/theme";

import { Navigation } from "components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navigation items={[]} />
      </div>
    </ThemeProvider>
  );
}

export default App;
