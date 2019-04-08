import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Promotions from "./containers/Promotions/Promotions";
import FreeWeek from "./containers/FreeWeek/FreeWeek";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/promotions" component={Promotions} />
          <Route path="/free-week" component={FreeWeek} />
          <Route path="/" exact component={Promotions} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
