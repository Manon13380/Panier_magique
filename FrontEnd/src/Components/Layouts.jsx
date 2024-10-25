
import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {

  const location = useLocation();
  return (
    <div>
      <Header />
      {!(location.pathname === "/Dashboard" || location.pathname.startsWith("/Dashboard/")) && (<NavBar />)}
      <main>{children}</main>
      {!(location.pathname === "/Dashboard" || location.pathname.startsWith("/Dashboard/"))&& (<Footer />)}
    </div>
  );
};

export default Layout;
