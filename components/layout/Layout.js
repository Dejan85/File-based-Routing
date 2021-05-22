import React from "react";
import Header from "./MainHeader";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
