import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Route, Switch, Link } from "react-router-dom";

import FreeWeek from "./containers/FreeWeek/FreeWeek";
import Promotions from "./containers/Promotions/Promotions";
import Home from "./containers/Home/Home";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <span>Home</span>
              <Link to="/home" exact />
            </Menu.Item>
            <Menu.Item key="2">
              <span>Free Week</span>
              <Link to="/free-week" exact />
            </Menu.Item>
            <Menu.Item key="3">
              <span>Promotions</span>
              <Link to="/promotions" exact />
            </Menu.Item>

          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Switch>
            <Route path="/free-week" component={FreeWeek} />
            <Route path="/promotions" component={Promotions} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Xirubot ©2019 Created by Xiru
        </Footer>
      </Layout>
    );
  }
}

export default App;
