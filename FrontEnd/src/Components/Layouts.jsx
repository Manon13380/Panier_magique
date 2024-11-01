
import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {

  const location = useLocation();
  return (
    <>
      <Header />
      {!location.pathname.startsWith("/Dashboard") && (<NavBar />)}
      <main>{children}</main>
      {!location.pathname.startsWith("/Dashboard") && location.pathname != "/success" && location.pathname != "/cancel" && (<Footer />)}
    </>
  );
};

export default Layout;
