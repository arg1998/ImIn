import React, { Component } from "react";
import Playground from "./Playground/Playground";
import { Switch, Route } from "react-router";
import AdminPanel from "./Panels/AdminPanel/AdminPanel";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={AdminPanel} />
      </Switch>
      // <Playground />
    );
  }
}

export default App;
