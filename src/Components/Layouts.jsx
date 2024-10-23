
import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
