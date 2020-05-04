import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";

import { Navigation } from "components";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
