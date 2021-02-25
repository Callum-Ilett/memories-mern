import React from "react";
import {
  Container,
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Navbar, Auth } from "components";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;
