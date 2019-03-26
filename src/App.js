import React, { Component } from "react";

import { Route, Switch, NavLink } from "react-router-dom";

import FreeWeek from "./containers/FreeWeek/FreeWeek";
import Promotions from "./containers/Promotions/Promotions";
import Home from "./containers/Home/Home";
import styles from "./App.module.css";
class App extends Component {
    render() {
        return (
            <>
                {/* <nav>
                    <NavLink to="/home" />
                    <NavLink to="/free-week" />
                    <NavLink to="/promotions" />
                </nav>
                <Switch>
                    <Route path="/free-week" exact component={FreeWeek} />
                    <Route path="/promotions" exact component={Promotions} />
                    <Route path="/home" exact component={Home} />
                </Switch> */}
            </>
        );
    }
}

export default App;
