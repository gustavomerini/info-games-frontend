import React from "react";
import Toolbar from "../../components/UI/Navigation/Toolbar/Toolbar";

const Layout = (props) => {
  return (
    <div>
      <Toolbar></Toolbar>
      {props.children}
    </div>
  );
};

export default Layout;
