import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import theme from "utils/theme";

import { Navigation } from "components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <Navigation
          items={[
            { content: "Homepage", to: "/" },
            { content: "Budget", to: "/budget" },
          ]}
        />

        <Switch>
          <Route exact path="/">
            Homepage
          </Route>
          <Route path="/budget">Buget page</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
