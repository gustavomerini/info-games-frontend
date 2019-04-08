import React from "react";

const Layout = (props) => {
  return (
    <div>
      <nav className="Toolbar">
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;
