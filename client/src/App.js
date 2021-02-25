import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Navbar, Auth } from "components";

console.log("REACT_APP" + process.env.REACT_APP_GOOGLE_CLIENT_ID);
console.log("test" + process.env.TEST);

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
