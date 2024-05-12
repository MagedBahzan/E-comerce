import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  // eslint-disable-next-line
  const [itemsCounter, setItemsCounter] = React.useState(0);

  return (
    <>
      <Header itemsCounter={itemsCounter} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
